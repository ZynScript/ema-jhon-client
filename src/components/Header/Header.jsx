import "./Header.css";
import logo from "../../images/Logo.svg";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => alert(err));
  };
  console.log(user);

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/inventory">Manage Intentory</Link>
        {user ? "" : <Link to="/login">Login</Link>}
        {user ? " " : <Link to="/signup">Sign Up</Link>}
        {user && (
          <span style={{color: "white", marginLeft: "1rem"}}>
            {user.email} <button onClick={handleLogOut}>Sign Out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
