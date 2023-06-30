/***************************************************************
 *                     Dependencies 
***************************************************************/

const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2/promise');
const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');
const CryptoJS = require('crypto-js');
require('dotenv').config();

const app = express();
const port = 3005;
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

/***************************************************************
 *                     Database connection 
***************************************************************/

const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'ivao_test',
});


/***************************************************************
 *                          Others 
***************************************************************/

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'santiago.baron.zuleta@ivao.aero',
		pass: process.env.MAILPASS
	}
});

const source = fs.readFileSync('./components/RFO/email_template.html', 'utf8');
const template = handlebars.compile(source);


/***************************************************************
 *                         Functions 
***************************************************************/

function encryp(data) {
	var encrypted = CryptoJS.AES.encrypt(data, process.env.CRYPTOPASS).toString();
	return encodeURIComponent(encrypted);
}

function decryp(data) {
	data = decodeURIComponent(data);
	var decrypted = CryptoJS.AES.decrypt(data, process.env.CRYPTOPASS);
	return decrypted.toString(CryptoJS.enc.Utf8);
}


/***************************************************************
 *                          Routes 
***************************************************************/

app.get('/ec/api/events', async (req, res) => {
	try {
		const [rows] = await connection.query('SELECT * FROM eventos');
		res.json(rows);
	} catch (error) {
		console.error('Error al obtener los eventos:', error);
		res.status(500).json({ error: 'Error al obtener los eventos' });
	}
});

app.get('/ec/api/rfo', async (req, res) => {
	try {
		const query = ` SELECT * FROM eventos WHERE tipo_evento = 'RFO' AND estado = 'ACTIVO' ORDER BY fecha_evento ASC LIMIT 1`;
		const [rows] = await connection.query(query);
		res.json(rows);
	} catch (error) {
		console.error('Error al obtener el evento RFO más cercano:', error);
		res.status(500).json({ error: 'Error al obtener el evento RFO más cercano' });
	}
});

app.post('/ec/api/rfo/checkFlights', async (req, res) => {
	const userData = req.body.usuario;

	if (userData) {
		const userID = userData.id;
		try {
			const query = `
			SELECT re.*, ve.*
			FROM reservas_eventos re
			JOIN vuelos_eventos ve ON re.id_vuelo = ve.id_vuelo
			WHERE re.VID = ?;
		  `;
			const [rows] = await connection.query(query, [userID]);
			res.json(rows);
		} catch (error) {
			console.error('Error al obtener los resultados de la reserva de vuelo:', error);
			res.status(500).json({ error: 'Error al obtener los resultados de la reserva de vuelo' });
		}
	}
});


app.post('/ec/api/rfo/verifyFlight', async (req, res) => {

	const id_vuelo = decryp(req.body.id);

	try {
		const query = `SELECT re.*, ve.*
		FROM reservas_eventos re
		JOIN vuelos_eventos ve ON re.id_vuelo = ve.id_vuelo
		WHERE re.id_vuelo = ?;`;
		const [rows] = await connection.query(query, [id_vuelo]);
		res.json(rows);
	} catch (error) {
		console.error('Error al obtener el evento RFO más cercano:', error);
		res.status(500).json({ error: 'Error al obtener el evento RFO más cercano' });
	}
});

app.post('/ec/api/rfo/confirmFlight', async (req, res) => {

	const id_vuelo = req.body.id;

	try {
		const query = `
		UPDATE vuelos_eventos ve
		INNER JOIN reservas_eventos re ON ve.id_vuelo = re.id_vuelo
		SET ve.estado_vuelo = 'CONFIRMADO',
			re.estado_vuelo = 'CONFIRMADO'
		WHERE ve.id_vuelo = ${id_vuelo};
	  `;

		await connection.query(query, [id_vuelo]);
		res.json({ message: 'Estado de vuelo actualizado correctamente' });
	} catch (error) {
		console.error('Error al actualizar el estado de vuelo:', error);
		res.status(500).json({ error: 'Error al actualizar el estado de vuelo' });
	}
});

app.post('/ec/api/rfo/cancelFlight', async (req, res) => {
	const idVuelo = req.body.flightID;

	try {
		const deleteReservasQuery = `
		DELETE FROM reservas_eventos
		WHERE id_vuelo = ?;
	  `;
		await connection.query(deleteReservasQuery, [idVuelo]);

		const updateVuelosQuery = `
		UPDATE vuelos_eventos
		SET estado_vuelo = 'LIBRE'
		WHERE id_vuelo = ?;
	  `;
		await connection.query(updateVuelosQuery, [idVuelo]);

		res.json({ message: 'Reserva de vuelo cancelada correctamente' });
	} catch (error) {
		console.error('Error al cancelar la reserva de vuelo:', error);
		res.status(500).json({ error: 'Error al cancelar la reserva de vuelo' });
	}
});


app.post('/ec/api/rfo/actualizarEstadoVuelo', async (req, res) => {
	try {
		const vuelo = req.body.vuelo;
		const usuario = req.body.usuario;

		if (vuelo.estado_vuelo === 'LIBRE') {

			const flightID = `${vuelo.id_vuelo}`
			const encrypted = `https://ec.ivao.aero/events/rfo/${encryp(flightID)}`

			const data = {
				name: usuario.firstName, lastName: usuario.lastName, airline: vuelo.logo_aerolinea,
				flightNumber: vuelo.numero_vuelo, icao_departure: vuelo.icao_salida,
				icao_arrival: vuelo.icao_llegada, departure_airport: vuelo.aeropuerto_salida,
				arrival_airport: vuelo.aeropuerto_llegada, route: vuelo.ruta,
				departure_time: vuelo.hora_salida, arrival_time: vuelo.hora_llegada,
				spot: vuelo.spot, aircraft: vuelo.tipo_aeronave, url: encrypted
			};
			const html = template(data);

			const mailOptions = {
				from: '"IVAO Ecuador" <ec-ec@ivao.aero>',
				to: usuario.email,
				subject: `Confirm your flight ${vuelo.numero_vuelo} - IVAO Ecuador RFO Event`,
				html: html
			};

			const updateQuery = `UPDATE vuelos_eventos SET estado_vuelo = 'RESERVADO' WHERE id_vuelo = ?`;
			await connection.query(updateQuery, [vuelo.id_vuelo]);

			const insertQuery = `INSERT INTO reservas_eventos (VID, id_vuelo, estado_vuelo) VALUES (?, ?, 'RESERVADO')`;
			await connection.query(insertQuery, [usuario.id, vuelo.id_vuelo]);

			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					res.json({ status: true });
				} else {
					res.json({ status: false });
				}
			});

		} else {
			res.json({ status: false });
		}

	} catch (error) {
		console.error('Error al actualizar el estado de vuelo y crear la reserva:', error);
		res.status(500).json({ error: 'Error al actualizar el estado de vuelo y crear la reserva' });
	}
});



























app.post('/ec/api/updateUser', async (req, res) => {

	try {
		const userInfo = req.body;
		const queryExistence = 'SELECT EXISTS(SELECT 1 FROM usuarios WHERE VID = ?) AS result;';
		const queryUpdate = 'UPDATE usuarios SET ultima_conexion = CURRENT_TIMESTAMP WHERE VID = ?;';
		const queryInsert = 'INSERT INTO usuarios (VID, nombre, apellido, rango_atc, rango_piloto, division, pais, correo_electronico, horas_atc, horas_piloto, ultima_conexion, rol_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?);';
		const paramsExistence = [userInfo.id];
		const paramsUpdate = [userInfo.id];
		const paramsInsert = [userInfo.id, userInfo.firstName, userInfo.lastName,
		userInfo.rating.atcRating.shortName, userInfo.rating.pilotRating.shortName,
		userInfo.divisionId, userInfo.countryId, userInfo.email, userInfo.hours[0].hours,
		userInfo.hours[1].hours, 'USR'];

		let existence = await connection.query(queryExistence, paramsExistence);
		existence = existence[0][0].result

		if (existence == 1) {
			connection.query(queryUpdate, paramsUpdate);
		} else {
			connection.query(queryInsert, paramsInsert);
		}
	} catch (error) {
		console.log('Se ha producido el error evitable: ' + error)
	}
});

app.get('/ec/api/rfo/flights', async (req, res) => {
	const { selectAirport, type } = req.query;

	let sql = `
	  SELECT ve.*, re.id_reserva, re.VID
	  FROM vuelos_eventos ve 
	  LEFT JOIN reservas_eventos re ON ve.id_vuelo = re.id_vuelo
	`;

	if (selectAirport === "SEQM" && type === "Departures") {
		sql += " WHERE icao_salida = 'SEQM'";
	} else if (selectAirport === "SEQM" && type === "Arrivals") {
		sql += " WHERE icao_llegada = 'SEQM'";
	} else if (selectAirport === "SEGU" && type === "Departures") {
		sql += " WHERE icao_salida = 'SEGU'";
	} else if (selectAirport === "SEGU" && type === "Arrivals") {
		sql += " WHERE icao_llegada = 'SEGU'";
	}
	

	const [rows] = await connection.query(sql);
	res.json(rows);
});

/***************************************************************
 *                          Server
***************************************************************/

app.listen(port, () => {
	console.log(`Servidor Express.js escuchando en el puerto ${port}`);
});