import React, { useState } from 'react';
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'
import menu from '../assets/menu.png'
import { Link } from 'react-router-dom';

const Header = () => {

    const [toggle, setToggle] = useState(false)

    console.log(toggle);

    return (
        <div className="header">
            <div className="container">
                <div className="navbar">

                    <div className="logo">
                        <Link to="/"><img src={logo} alt="logo" width="125px" /></Link>
                    </div>

                    <nav>
                        <ul className={`MenuItems ${toggle && 'toggleStyle'}`}>
                            <li><Link href="products.html">Products</Link></li>
                            <li><Link href="">About</Link></li>
                            <li><Link to="/sign-in"> Sign In</Link></li>
                        </ul>
                    </nav>

                    <Link to="/cart"><img src={cart} width="30px" height="30px" /></Link>


                    {toggle && <img src={menu} className="menu-icon" onClick={() => setToggle(false)} />}
                    {!toggle && <img src={menu} className="menu-icon" onClick={() => setToggle(true)} />}
                </div>

            </div>
        </div >
    );
};

export default Header;