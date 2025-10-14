"use client";

import { IUser } from "../types/user";

import { apiClient } from "@/lib/apiClient";

const getData = async () => {
	const user = await apiClient.get<IUser>('/api/user');
	return user;
}

const updateUserDB = async (userInfo: IUser) => {
	try {
		const result = await apiClient.post('https://api.ec.ivao.aero/ec/api/updateUser', userInfo);
		console.log(result);
	} catch (err) {
		console.error('Se ha producido un error del lado del servidor', err);
	}
};

export const getUserData = async () => {
	const userData = await getData();
	if (userData && (userData as any).message !== 'Forbidden') {
		// fire-and-forget: no await para no bloquear el caller
		void updateUserDB(userData);
	}
	return userData;
};
