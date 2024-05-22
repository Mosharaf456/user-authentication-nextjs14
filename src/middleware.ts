import { NextResponse, type NextRequest } from "next/server";
// import { updateSession, getSession } from "./app/actions/lib";
import { updateSession, getSession } from "@/app/actions/lib";


export async function middleware(request: NextRequest) {
    await updateSession(request);
    const session = await getSession();
    console.log('session ', session);

    const path = request.nextUrl.pathname;
    const checkPath = path === '/login' || path === '/signup' || path ==='/';
    console.log('path ', path);

    try {
        if(checkPath && session !== null) {  // user will not go to the login page if already logged in
            return NextResponse.redirect(new URL('/dashboard' , request.url));
        }
        if(!checkPath && session === null) { //any path that is not login or signup will be redirected to login page if not logged in
            return NextResponse.redirect(new URL('/login' , request.url));
        }
    }catch(e) {
        console.log('middleware error ***********', e);
    }


}

export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*', '/login'],
};