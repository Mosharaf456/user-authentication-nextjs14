'use client';

import React, { useState } from 'react';
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";


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


    const handleSignSubmitCustomFunc = (e: any) => {
        e.preventDefault();
        console.log('signInFormData', signInFormData);

        // const formData = new FormData();
        // formData.append("email", signInFormData.username);
        // formData.append("password", signInFormData.password);

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

          <form onSubmit={ handleSignSubmitCustomFunc }>
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
                <button type='submit' >Login</button>
          </form>
        </div>
    );

}
export default LoginPageComponent;

