export default function UserInfo() {
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="shadow-lg p-8 bg-indigo-300/30 flex flex-col gap-2 my-6">
                <div>
                    Name: <span className="font-bold text-indigo-500">John</span>
                </div>
                <div>
                    Email: <span className="font-bold text-indigo-500">john@gmail.com</span>
                </div>

                <button className="bg-indigo-400 text-white font-bold px-6 py-2 mt-3 rounded-lg transition-all duration-700 ease-in-out hover:bg-indigo-500">Log Out</button>
            </div>
        </div>
    )
}