const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3005;
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// Configuración de la conexión a la base de datos
const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'ivao_test',
});

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

app.post('/ec/api/updateUser', async (req, res) => {

	try {
		const userInfo = req.body;
		const queryExistence = 'SELECT EXISTS(SELECT 1 FROM usuarios WHERE VID = ?) AS result;';
		const queryUpdate = 'UPDATE usuarios SET ultima_conexion = CURRENT_TIMESTAMP WHERE VID = ?;';
		const queryInsert = 'INSERT INTO usuarios (VID, nombre, apellido, rango_atc, rango_piloto, division, pais, correo_electronico, horas_atc, horas_piloto, ultima_conexion, rol_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?);';
		const paramsExistence = [userInfo.id];
		const paramsUpdate = [userInfo.id];
		const paramsInsert = [
			userInfo.id,
			userInfo.firstName,
			userInfo.lastName,
			userInfo.rating.atcRating.shortName,
			userInfo.rating.pilotRating.shortName,
			userInfo.divisionId,
			userInfo.countryId,
			userInfo.email,
			userInfo.hours[0].hours,
			userInfo.hours[1].hours,
			'USR'
		];

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

	console.log(selectAirport, type)

    let sql = "SELECT * FROM vuelos_eventos";
    if (selectAirport === "SEQM" && type === "Departures") {
        sql += " WHERE icao_salida = 'SEQM'";
    } else if (selectAirport === "SEQM" && type === "Arrivals") {
        sql += " WHERE icao_llegada = 'SEQM'";
    } else if (selectAirport === "SEGU" && type === "Departures") {
        sql += " WHERE icao_salida = 'SEGU'";
    } else if (selectAirport === "SEGU" && type === "Arrivals") {
        sql += " WHERE icao_llegada = 'SEGU'";
    }

    const results = await connection.query(sql)
	console.log(results)
    res.json(results);

})

app.listen(port, () => {
	console.log(`Servidor Express.js escuchando en el puerto ${port}`);
});