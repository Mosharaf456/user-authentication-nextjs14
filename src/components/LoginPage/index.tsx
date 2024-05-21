"use client"

import React, { useState } from 'react';
import { login } from '@/actions/login';
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    console.log('LoginPage');

    async function handleSignIn(event: any) {
        event.preventDefault();
        console.log('handleSignIn');
        
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        console.log('formData', formData);

        const result = await login(formData);
        if (result) router.push("/dashboard");
    }

    return (
        <form onSubmit={handleSignIn}>
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
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
