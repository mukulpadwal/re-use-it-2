import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({className = ""}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="cursor-pointer z-50 bg-black absolute top-4 left-4 border rounded-lg p-1">
        {!showMenu ? (
          <Menu
            fill="black"
            className="text-white bg-black"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <X
            fill="black"
            className="text-white bg-black"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </div>
      {showMenu && (
        <nav className={`z-40 w-full bg-slate-500  flex flex-row justify-center items-center ${className}`}>
          <div className="w-full flex flex-wrap flex-col justify-center items-center gap-3">
            <Link
              to="/random-user"
              className="bg-white w-1/2 sm:w-1/4 text-center text-xl text-black border border-black rounded-md px-2 py-1 font-bold hover:bg-slate-600 hover:border hover:border-white hover:text-white"
            >
              Random User
            </Link>
            <Link
              to="/random-jokes"
              className="bg-white w-1/2 sm:w-1/4 text-center text-xl text-black border border-black rounded-md px-2 py-1 font-bold hover:bg-slate-600 hover:border hover:border-white hover:text-white"
            >
              Random Jokes
            </Link>
            <Link
              to="/cats-listing"
              className="bg-white w-1/2 sm:w-1/4 text-center text-xl text-black border border-black rounded-md px-2 py-1 font-bold hover:bg-slate-600 hover:border hover:border-white hover:text-white"
            >
              Cats Listing
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
