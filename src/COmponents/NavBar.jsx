import React from  'react';
import { IoSearch } from "react-icons/io5";

export default function NavBar(props) {
    return(
        <> 
            <div className=" bg-blue-950 text-yellow-300 h-20 pt-4 px-6">
                <nav className="flex text-center justify-between flex-wrap">
                    <div className="text-2xl">{props.heading}</div>
                    <ul className="flex space-x-3">
                        <li>LATEST</li>
                        <li>POPULAR</li>
                    </ul>
                    <div className="bg-white py-1.5  rounded-lg text-blue-950 flex"><input className='placeholder:px-2 inline-block w-32' type="search" placeholder='seach movies'  /><IoSearch className='mr-2 mt-1 w-7' /></div>
                    <select className="rounded-lg text-blue-950 px-2" name="lang" id="eng">
                        <option value="eng">English</option>
                        <option value="fn">French</option>
                    </select>
                </nav>

            </div>
        </>
    )
}