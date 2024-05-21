import { getSession, login } from "@/actions/login";
import LoginServer from './s-copy-working-page';

import LoginPageComponent from "./pageC-is";



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
        </div>
    </section>
  );
}