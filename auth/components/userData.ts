"use client";

import { IUser } from "../types/user";

const getData = async () => {
	const res = await fetch("/api/user");
	const user = (await res.json()) as IUser;
	return user;
}

const updateUserDB = async (userInfo: IUser) => {
	await fetch('http://localhost:3005/ec/api/updateUser', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userInfo),
	})
		.then(response => response.json())
		.then(result => {
			console.log(result);
		})
		.catch(() => {
			console.error('Se ha producido un error del lado del servidor');
		});
};

export const getUserData = async () => {
	const userData = await getData();
	if (userData.message != 'Forbidden') {
		updateUserDB(userData)
	}
	return userData;
};