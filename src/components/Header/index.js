import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";

import "./index.css"

const Header = ()=>(
    <div className="header-container">
        <h1 className="header-heading">Elite Enterprise</h1>
        <div className="header-sub-container">
            <Link to="/"  className="header-links">
                <p>Home</p>
            </Link>
            <Link to="/about"  className="header-links">
                <p>About</p>
            </Link>
            
            <p className="header-links">Pages</p>
            <Link to="/shop"  className="header-links">
                <p className="header-links">Shop</p>
            </Link>
            <p className="header-links">Brands</p>
            <p className="header-links">Support</p>
            <input className="header-search" type="text" />
            <div className="search-icon">
                <BsSearch />
            </div>
            <div className="header-cart">
                <div className="header-cart-icon-container">
                    <BsCart3 className="cart-icon"/>
                </div>
                <h1 className="header-links">Cart (0)</h1>
            </div>
        </div>
    </div>

)

export default Header