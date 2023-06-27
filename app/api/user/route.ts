import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { IUser } from "@/auth/types/user";
import { useContext } from "react";

const secret = process.env.NEXTAUTH_SECRET as string

export async function GET(req: any) {
    const token = await getToken({ req, secret })

    if(token) {
        try {
            const response = await fetch(`${process.env.IVAO_API_URL}/v2/users/me`, {
                headers: {
                    'Authorization': `Bearer ${token.accessToken}`
                },
                method: "GET"
            })
        
            const data: IUser = await response.json()
            return NextResponse.json({ ...data })
			
        }catch (err) {
            return NextResponse.json(err)
        }
    }
    
    return NextResponse.json({message: "Unauthorized"}, { status: 401 });
}