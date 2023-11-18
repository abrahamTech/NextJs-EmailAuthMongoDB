import Link from "next/link";

export default function SignInForm() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="shadow-xl p-5 rounded-lg border-t-4 border-indigo-400">
                
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form className="flex flex-col gap-2">

                    <div className="flex flex-col">
                        <label htmlFor="userName" >Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Stephen Cruise" 
                            id="userName"
                            className="inputLogin"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userEmail" >Email</label>
                        <input 
                            type="text" 
                            placeholder="iamalbert@gmail.com" 
                            id="userEmail"
                            className="inputLogin"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="userPassword" >Password</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            id="userPassword"
                            className="inputLogin" 
                        />
                    </div>

                    <button className="btn-primary">Register</button>

                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        Error message
                    </div>
                    
                    <Link href={"/"} className="text-sm mt-3 text-right">
                        Already have an acount? <span className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_2px] bg-no-repeat bg-bottom">Log In</span>
                    </Link>

                </form>
            </div>

        </div>
    )
}