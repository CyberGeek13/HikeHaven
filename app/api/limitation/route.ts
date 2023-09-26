import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
    request: Request,
) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        await prisma.hike.updateMany({
            where: {
                id: {
                    in: currentUser.hikeIds
                }
            },
            data: {
                quantity: {
                    decrement: 1
                }
            }
        })

        await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                hikeIds: {
                    set: []
                },
                hikeDates: {
                    set: []
                }
            }
        })

        return new NextResponse('OK', { status: 200 });
    } catch (error) {
        console.log(error, 'ERROR_HIKE_DELETE');
        return new NextResponse('Internal Error', { status: 500 });
    }
}