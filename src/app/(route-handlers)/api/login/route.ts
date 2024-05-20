
// http://localhost:3000/api/login
export async function GET() {
    console.log(">>>>>>>>>>login >>>>>>>>>>>>>");
    return new Response("login", { status: 202 });
}