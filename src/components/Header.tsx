import { Logo } from "components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="lg:container m-auto w-11/12 flex place-items-center justify-between py-4">
      <Link to="/">
        <Logo />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;

function NavBar() {
  return (
    <nav>
      <ul className="flex place-items-center gap-6 font-medium">
        <li>
          <Link
            role="link"
            className="hover:bg-slate-100 py-2 px-4 inline-block"
            to={"/login"}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            role="link"
            className="hover:bg-slate-100 py-2 px-4 inline-block"
            to="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}
