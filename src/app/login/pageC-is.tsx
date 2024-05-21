"use client";

import React, { useState } from 'react';
import { useFormState } from "react-dom";
import { useRouter } from "next/router";


interface LoginFormData {
    username: string;
    password: string;
}

const initialLoginFormData: LoginFormData = {
    username: "",
    password: "",
};
interface LoginResult {
    error?: string;
}

function LoginPageComponent() {
    const router = useRouter();

    const [signInFormData, setSignInFormData] = useState<LoginFormData>(initialLoginFormData);
    
    const [error, setError] = useState("");


    function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('signInFormData', signInFormData);

        const formData = new FormData();
        formData.append("email", signInFormData.username);
        formData.append("password", signInFormData.password);

        // const result = await loginUserAction(signInFormData);
        // console.log(result);
        // if (result?.status) {
        //     router.push("/dashboard");
        // } else {
        //     setError(result?.error || "");
        // }
    }

    return (
        <div>
          <h1>Login C</h1>
            {error && <p>{error}</p>}

          <form onSubmit={handleSignIn}>
            <div>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    value={signInFormData.username}
                    onChange={(e) => setSignInFormData({ ...signInFormData, username: e.target.value })}
                />
                </div>
                <br />
                <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    value={signInFormData.password}
                    onChange={(e) => setSignInFormData({ ...signInFormData, password: e.target.value })}
                />
                </div>
                <br />
                <button type="submit">Login</button>
          </form>
        </div>
    );

}
export default LoginPageComponent;

/*
    //Working
const LoginPageComponent = () => {
    
    const [state, formAction] = useFormState<any, FormData>(loginAction, undefined);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section>
            {state?.error && <p>{state.error}</p>}
            <form action={formAction}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                    type="text"
                    // id="username"
                    name="username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                    type="password"
                    // id="password"
                    name="password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button>Login</button>
            </form>
        </section>
    );
};

export default LoginPageComponent;
*/
