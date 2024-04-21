import React from  'react';
import { IoSearch } from "react-icons/io5";

export default function NavBar() {
    return(
        <> 
            <div className=" bg-blue-950 text-yellow-300 h-20 pt-4 px-6">
                <nav className="flex text-center justify-between flex-wrap">
                    <div className="text-2xl">Movie App</div>
                    <ul className="flex space-x-3">
                        <li>LATEST</li>
                        <li>POPULAR</li>
                    </ul>
                    
                    <select className="rounded-lg text-blue-950 px-2" name="lang" id="eng">
                        <option value="eng">English</option>
                        <option value="fn">French</option>
                    </select>
                </nav>

            </div>
        </>
    )
}