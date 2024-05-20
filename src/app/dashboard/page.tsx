import { redirect } from "next/navigation";
import { getSession } from "@/actions/login";
import LogoutButton from "@/components/Logout";


export default async function Dashboard() {
    const session = await getSession();
    if(!session) redirect('/login');
    
    return (
        <>
          <h1>Dashboard Page</h1>
          {session && (
            <LogoutButton />
          )}
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </>
    );
}   