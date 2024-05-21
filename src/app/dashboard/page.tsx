import { redirect } from "next/navigation";
import { getSession } from "@/actions/login";
import LogoutForm from "@/components/Logout/LogoutForm";


export default async function Dashboard() {
    
    return (
        <>
          <h1>Dashboard Page</h1>
           <LogoutForm />
          <br/> 
          <br/>
        </>
    );
}   