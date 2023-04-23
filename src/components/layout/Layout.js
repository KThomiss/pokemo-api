import { NavLink } from "react-router-dom";
function Layout() {
  return (
    <nav>
      <ul className="header-ul">
        <li className="header-li">
          <NavLink end to="/">
            Home
          </NavLink>
          <NavLink to="/pokedex">Pokèdex</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Layout;
