"use client";

import { IUser } from "../types/user";

export const getUserData = async () => {
	const res = await fetch("/api/user");
	const user = (await res.json()) as IUser;
	return user;
};