"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { loginUserAction } from "@/app/actions/lib";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
})

interface FormValues {
    username: string;
    // Add other form fields here if any
}

export default function LoginComponent() {
    const Router = useRouter();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    })
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log(data);
        const response = await loginUserAction(data);
        console.log('22MAY response==============', response);
        if(response.status){
            Router.push('/dashboard');
        }
    };


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                remember me
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Login</Button>
      </form>
    </Form>
  )
}