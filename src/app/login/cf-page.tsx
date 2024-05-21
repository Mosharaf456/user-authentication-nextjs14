import { redirect } from "next/navigation";
import { getSession, login } from "@/actions/login";
import LoginPageComponent from "@/components/LoginPage/LoginPageComponent";


export default async function Login() {
  const session = await getSession();
  
  const formAction: any = async (formData:FormData) => {
    "use server";
    console.log('MHMHMHMHMHM formData============', formData);
    const status = await login(formData);
    status && redirect("/dashboard");
  }

  return (
    <section>
        <h1>LOGIN PAGE</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px'}} >
            {/* <form
            action={formAction}
            >
                <input type="text" placeholder="username" name="username"/>
                <br />
                <br />
                <input type="text" placeholder="password" name="password"/>
                <br /> 
                <br />
                <button type="submit">Login</button>
            </form> */}

            <LoginPageComponent submitHandler={formAction} />
        </div>
    </section>
  );
}