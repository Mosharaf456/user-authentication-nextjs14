"use client";

import React, { useState } from 'react';
import { useRouter } from "next/router";

import { loginUserAction } from "@/actions/login";

interface LoginFormData {
    username: string;
    password: string;
}

const initialLoginFormData: LoginFormData = {
    username: "",
    password: "",
};


function LoginPageComponent() {
    const router = useRouter();

    const [signInFormData, setSignInFormData] = useState<LoginFormData>(initialLoginFormData);
    
    const [error, setError] = useState("");


    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        // const formData = new FormData();
        // formData.append("email", signInFormData.username);
        // formData.append("password", signInFormData.password);
        // console.log("formData:::", formData);

        const result = await loginUserAction(signInFormData);
        console.log(result);
        if (result?.status) {
            router.push("/dashboard");
        } else {
            setError(result?.error || "");
        }
    }
    return (
        <div>
          <h1>Login UI</h1>
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
                <button type="submit">User Login</button>
            </form>
        </div>
    );

}

export default LoginPageComponent;
