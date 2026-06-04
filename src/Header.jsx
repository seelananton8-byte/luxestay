import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="logo">🍔 Food Cart</div>

      <ul>
        <li>
          <Link to="/">
          <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
          <FaShoppingCart />
           View Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;