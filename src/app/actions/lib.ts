"use server";
// Good to know: HTTP does not allow setting cookies after streaming starts, so you must use .set() in a Server Action or Route Handler.

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);
console.log('key ***********', key);

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

export const login = async (
  formData: FormData
) => {
  let username = formData.get("username") as string;
  let password = formData.get("password") as string;
  const user = { username, role: ['admin'] };

  // Verify credentials && get the user
  if (username !== 'admin' || password !== '123') {
    return { status: false, error: "Wrong Credentials"};
  }

  // Create the session
  const expires = new Date(Date.now() + 120 * 1000);
  const session = await encrypt({ user, expires });
  // Save the session in a cookie
  cookies().set("session", session, { 
    expires, 
    httpOnly: true,
    // secure: true,
    // sameSite: 'lax',
  });

  return { status: true, success: "Login Successfull"};
}
interface LoginFormData {
  username: string;
}

export const loginUserAction = async (
  {username}: LoginFormData
) => {
  
  console.log('22MAY username==============', username);

  const user = { username, role: ['admin'] };

  // Verify credentials && get the user
  if (username !== 'admin') {
    return { status: false, error: "Wrong Credentials"};
  }

  // Create the session
  const expires = new Date(Date.now() + 120 * 1000);
  const session = await encrypt({ user, expires });
  // Save the session in a cookie
  cookies().set("session", session, { 
    expires, 
    httpOnly: true,
    // secure: true,
    // sameSite: 'lax',
  });

  return { status: true, success: "Login Successfull"};
}

export const loginAction = async (
  prevState: { error: undefined | object },
  formData: FormData
) => {
  let username = formData.get("username") as string;
  let password = formData.get("password") as string;
  console.log('21MAY username', username);
  console.log('21MAY password', password);

  const user = { username, role: ['admin'] };
  // Verify credentials && get the user
  if (username !== 'admin' || password !== '123') {
    return { error: "Wrong Credentials" };
  }
  else{
    console.log('21MAY user', username);
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

  redirect("/dashboard");
}


export async function logoutAction() {
  try {
    const cookieStore =  cookies();
    cookieStore.set('session', '', { expires: new Date(0)});
    console.log('logout successfull 21 May 2024');
    
    redirect("/login");
  } catch(e) {
    console.log('error ***********', e);
  }
}
export const logout = async () => {
  const cookieStore =  cookies();
  cookieStore.set('session', '', { expires: new Date(0)});
  console.log('logout successfull 21 May 2024=============');
  
  redirect("/login");
};

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
