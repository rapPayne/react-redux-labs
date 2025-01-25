import { Link } from "react-router-dom"
import { User } from "../types/User"
import { ReactElement } from "react";
import './ResponsiveNavBar.css';

type Props = {
  user: User | undefined;
};

export const ResponsiveNavBar = ({ user }: Props): ReactElement => {
  // console.log({ user });
  return (
    <div id="ResponsiveNavBar">
      <div id="menu-toggle">
        <label className="hamburger-menu">
          <i className="material-icons">menu</i>
          <input type="checkbox" />
        </label>
      </div>
      <Link to="/" id="business-name">Dinner and a Movie</Link>
      <nav>
        {user ?
          <>
            <Link to="/account">{user.first + "'s account"}</Link>
            <Link to="/logout">logout</Link>
            <Link to="/checkout"><span className="material-icons">shopping_cart</span></Link>
          </>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        }
      </nav>
    </div>
  )
}