import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { CreateToken } from "@/utility/JWTTokenHelper";
import { headers } from "next/headers";
export async function POST(req, res) {

    try {
        let headerList = await headers();
        let email = headerList.get('email');
         console.log(email)
        const prisma = new PrismaClient();
        let reqBody = await req.json();
        const otp = reqBody.otp;
        if (!otp) {
            return NextResponse.json({ status: "fail", data: "OTP is missing" });
        }
        const user = await prisma.users.findUnique({ where: { email: email, otp: otp } })
        if (user.otpExpireAt && new Date() > new Date(user.otpExpireAt)) {

            await prisma.users.update({
                where: { email },
                data: {
                    otp: "0",
                    otpExpireAt: null,
                },
            });

            return NextResponse.json(
                {
                    status: "fail",
                    data: "OTP expired",
                },
                { status: 401 }
            );
        }

        await prisma.users.update({
            where: { email },
            data: {
                otp: "0",
                otpExpireAt: null
            }
        });
        let token = await CreateToken(user.email, user.id);
        let expireDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const cookieString = `token=${token}; expires=${expireDuration.toUTCString()} ;path=/; httpOnly:true; SameSite=Strict`;
        return NextResponse.json({ status: "success", data: token }, { status: 200, headers: { 'set-cookie': cookieString } })




    }
    catch (e) {
        return NextResponse.json({ status: "fail", data: e })
    }
}