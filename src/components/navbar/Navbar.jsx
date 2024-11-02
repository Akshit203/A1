import React from 'react'
import { Link, Route } from 'react-router-dom';
import Search from '../search/Search';
import { useNavigate } from 'react-router-dom';
import SignUp from '../../pages/Registration/SignUp';
import Products from '../../pages/Products';
import { useSelector } from "react-redux";


const Navbar = () => {
    
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.removeItem('users'); // Clearing localStorage for 'users'
        navigate("/login");
    }

    const navbar_list = (
        <ul className="flex py-3 space-x-7 text-white font-medium text-xl px-5 pt-4 ">
            <li className="border-b-2 bg-white text-black px-3 hover:border-blue-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/'}>Home</Link>
            </li>
            <li className=" border-b-2  text-black  px-3 hover:border-blue-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/Products'}>Products</Link>
            </li>
            {!user && (
                <>
                    <li className=" border-b-2  text-black  px-3 hover:transform hover:scale-105 hover:border-blue-500  transition-transform duration-300 ">
                        <Link to={'/Register'}>Register</Link>
                    </li>
                    <li className=" border-b-2 pb-1  text-black rounded-sm px-3 hover:transform hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out">
                        <Link to={'/Login'}>Log in</Link>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li className="border-b-2 bg-white text-black rounded-sm px-3 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to={'/UserDashBoard'}>{user?.name || 'User'}</Link>
                    </li>
                    <li className="border-b-2 bg-white text-black rounded-sm px-3 hover:border-blue-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out" onClick={logout}>
                        Logout
                    </li>
                </>
            )}
            <li className="border-b-2 bg-white text-black rounded-sm px-3 hover:border-blue-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/cart'}>
                    Cart({Products.length})
                </Link>

            </li>
        </ul>
    );

    return (
        <nav className="bg-gray-100-50 sticky z-50 top-0 min-h-15 shadow-md">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* Logo */}
                <div className="left mt-2  lg:py-2">
                    <Link to={'/'}>
                        <h2 className="font-bold text-black text-4xl text-center">A1 Store</h2>
                    </Link>
                </div>

                {/* NavBar List items */}
                <div className="right flex justify-center mb-4 lg:mb-0 ">
                    {navbar_list}
                </div>

                {/* Search Bar */}
                <Search />
            </div>
        </nav>
    );
}

export default Navbar;
