import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

const prisma = new PrismaClient();

export async function POST() {

    try {
        let headerList = await headers();
        let email = headerList.get('email');

        console.log(email)
        const user = await prisma.users.findUnique({ where: { email: email } })
        const expiry = new Date(Date.now() + 60 * 1000);
        await prisma.users.updateMany({
            data: {
                otpExpireAt: expiry
            }
        });

        return Response.json({
            status: "success"
        });

    } catch (e) {

        return Response.json({
            status: "fail",
            data: e.message
        });
    }
}