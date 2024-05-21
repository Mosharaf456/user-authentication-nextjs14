"use client";

import React, { useState } from 'react';
import { useFormState } from "react-dom";
// import { useRouter } from "next/navigation";

import { loginAction } from "@/actions/login";

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
