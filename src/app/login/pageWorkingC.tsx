'use client';

import React, { useState } from 'react';
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

import { loginAction } from "@/actions/login";


const LoginPageC = () => {
    
  const [state, formAction] = useFormState<any, FormData>(loginAction, undefined);

  return (
      <section>
          
          {state?.error && <p> {state?.error} </p>}

            <h2>Login</h2>
          <form action={formAction}>
              <div>
                  <label htmlFor="username">Username: </label>
                  <input type="text" name="username"/>
              </div>
              <br />
              <div>
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password"/>
              </div>
              <br />
              <button type="submit">LoginA1</button>
          </form>
      </section>
  );
};

export default LoginPageC;
