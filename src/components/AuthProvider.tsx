"use client";
import { createContext, useContext } from "react";

type AuthProviderType = {
    userDetails: {
        user: string;
        email: string;
    }
};

const AuthProvider = {
    userDetails: {
        user: 'MH',
        email: "mosharaf111hossain@gmail.com"
    }
};


const UserContext = createContext<AuthProviderType>(AuthProvider);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserContext.Provider value={AuthProvider}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);