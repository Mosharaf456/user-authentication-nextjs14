"use client";

import LoginPageComponent from "@/components/LoginPage/LoginPageComponent";

export default async function Login() {

  return (
    <section>
        <h1>LOGIN PAGE</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px'}} >
            <LoginPageComponent />
        </div>
    </section>
  );
}