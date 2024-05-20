"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

// import { login } from '@/actions/login';

const LoginPageComponent: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        alert(`Hello ${username} ${password}`);

    }

    return (
        <section>
            <h1>LOGIN PAGE</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br />
                <button>Login</button>
            </form>
        </section>
    );
};

export default LoginPageComponent;