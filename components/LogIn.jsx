"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if(res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("dashboard");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex ">
            <div className="shadow-xl p-5 rounded-lg border-t-4 border-indigo-400">
                
                <h1 className="text-xl font-bold my-4">Login</h1>

                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                            <label htmlFor="userEmail" >Email</label>
                            <input 
                                type="text" 
                                placeholder="iamalbert@gmail.com" 
                                id="userEmail"
                                className="inputLogin"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userPassword" >Password</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            id="userPassword"
                            className="inputLogin"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn-primary">Login</button>

                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            Error Message: {error}
                        </div>
                    )}
                    
                    <div href={"/register"} className="text-sm mt-3 text-right">
                        Don't have an acount? <Link href={"/register"} className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">Register</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}