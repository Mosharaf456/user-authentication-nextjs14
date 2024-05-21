import { redirect } from "next/navigation";
import { getSession, login } from "@/actions/login";


export default async function Login() {
  const session = await getSession();
  console.log('session', session);

  return (
    <section>
        <h1>LOGIN PAGE</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px'}} >
            <form
              action={async (formData) => {
                "use server";
                const data = await login(formData);
                data.status && redirect("/dashboard");
              }}
            >
                <input type="text" placeholder="username" name="username"/>
                <br />
                <br />
                <input type="text" placeholder="password" name="password"/>
                <br /> 
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    </section>
  );
}