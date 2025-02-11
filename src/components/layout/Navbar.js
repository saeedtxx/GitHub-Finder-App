import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav>
      <div className="navbar bg-neutral mb-12 shadow-lg text-neutral-content justify-between">
        <div>
          <Link to="/">
            <FaGithub className="mx-2 text-4xl inline hover:text-slate-200" />
          </Link>
          <h2 className="text-xl font-bold hover:text-slate-200 ">
            Github Finder
          </h2>
        </div>
        {/* theme toggle component */}
        <ThemeToggle />

        <div className="flex justify-end ">
          <Link className="btn btn-ghost btn-sm rounded-btn " to="/">
            Home
          </Link>
          <Link className="btn btn-ghost btn-sm rounded-btn mx-2 " to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
