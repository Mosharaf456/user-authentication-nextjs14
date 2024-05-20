'use server'
// Good to know: HTTP does not allow setting cookies after streaming starts, so you must use .set() in a Server Action or Route Handler.

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from 'next/navigation'

const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("180 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  //trim form field
  const username:any = formData.get("username");
  username && username.toString().trim();
  const password:any = formData.get("password");
  password && password.toString().trim();

  const user = { username, role: ['admin'] };
  // Verify credentials && get the user
  if (username !== 'admin' || password !== 'brotecs1230') {
      return false;
  }

  // Create the session
  const expires = new Date(Date.now() + 120 * 1000);
  const session = await encrypt({ user, expires });
  // Save the session in a cookie
  cookies().set("session", session, { 
    expires, 
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  return true;
}


export async function logoutAction() {
  try {
    const cookieStore = cookies();
    const hasSessionCookie = cookieStore.has('session');
    if(!hasSessionCookie) return null;

    const getCookies =  cookies();
    getCookies.set('session','');

  } catch(e) {
    console.log('error ***********', e);
    const getCookies =  cookies();
    getCookies.set('session','');
  }
}

export async function getSession() {
  const cookieStore = cookies();
  const hasSessionCookie = cookieStore.has('session');
  if(!hasSessionCookie) return null;

  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const cookieStore = cookies();
  const hasSessionCookie = cookieStore.has('session');
  if(!hasSessionCookie) return null;

  const session = cookieStore.get("session")?.value;
  if (!session) return null;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 120 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}

export async function deleteSession() {
  const cookieStore = cookies();
  const hasSessionCookie = cookieStore.has('session');
  if(!hasSessionCookie) return null;
  
  cookieStore.delete('session')

}
