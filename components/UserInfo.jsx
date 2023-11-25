"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {

    const { data: session } = useSession();

    return(
        <div className="flex items-center justify-center h-screen">
            <div className="shadow-lg p-8 bg-indigo-300/30 flex flex-col gap-2 my-6">
                <div>
                    Name: <span className="font-bold text-indigo-500">{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span className="font-bold text-indigo-500">{session?.user?.email}</span>
                </div>

                <button onClick={() => signOut()} className="bg-indigo-400 text-white font-bold px-6 py-2 mt-3 rounded-lg transition-all duration-700 ease-in-out hover:bg-indigo-500">Log Out</button>
            </div>
        </div>
    )
}