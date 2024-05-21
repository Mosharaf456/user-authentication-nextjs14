
import { getSession, login } from "@/app/actions/login";
import LoginServer from './s-working-page';


import LoginPageComponent from "./pageC-is";
import LoginPageC from "./pageWorkingC";



export default async function Login() {
  const session = await getSession();
  console.log('session', session);

  return (
    <section>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px'}} >
          {/* LoginServer is working */}
          <LoginServer /> 
          
          {/* But LoginPageComponent is not working as expected */}
          {/* <LoginPageComponent /> */}

          { /*This client components working but error throws on logout  */}
          {/* <LoginPageC /> */}

        </div>
    </section>
  );
}