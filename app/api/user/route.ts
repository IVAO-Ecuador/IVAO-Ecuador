import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { IUser } from "@/auth/types/user";
import { apiClient } from '@/lib/apiClient'

const secret = process.env.NEXTAUTH_SECRET as string

export async function GET(req: any) {
    const token = await getToken({ req, secret })

    if(token) {
        try {
            const data: IUser = await apiClient.request(`${process.env.IVAO_API_URL}/v2/users/me`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token.accessToken}`
                }
            })

            return NextResponse.json({ ...data })
        }catch (err) {
            return NextResponse.json(err)
        }
    }
    
    return NextResponse.json({message: "Unauthorized"}, { status: 401 });
}