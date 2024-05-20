import { logoutAction } from "@/actions/login";

// http://localhost:3000/api/logout
export async function GET() {
    await logoutAction();
    console.log(">>>>>>>>>>logout successfull>>>>>>>>>>>>>");
    return new Response("logout successfull", { status: 202 });
}