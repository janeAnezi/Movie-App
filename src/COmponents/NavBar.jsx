import { IoSearch } from "react-icons/io5";

export default function NavBar() {
    return(
        <> 
            <div className="bg-blue-950 text-yellow-300 h-20 pt-4 px-6">
                <nav className="flex text-center justify-between">
                    <div className="text-2xl">MOVIE~BROWSER</div>
                    <ul className="flex space-x-3">
                        <li>LATEST</li>
                        <li>POPULAR</li>
                    </ul>
                    <button type="search" className="bg-white py-1.5 px-3  rounded-lg text-blue-950 flex"><div className="p-1 pr-2"><IoSearch /></div> Search for movies</button>
                    <select className="rounded-lg text-blue-950 px-2" name="lang" id="eng">
                        <option value="eng">English</option>
                        <option value="fn">French</option>
                    </select>
                </nav>

            </div>
        </>
    )
}