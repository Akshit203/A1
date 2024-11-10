import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();

    // Logout function
    const logout = () => {
        localStorage.removeItem('users');
        navigate("/login");
    };

    const navbar_list = (
        <ul className="flex flex-wrap justify-center space-x-3 lg:space-x-7 font-medium text-xs sm:text-sm md:text-base px-5 pt-2">
            <li className="border-b-2 bg-white text-black px-2 sm:px-3 hover:border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="border-b-2 bg-white text-black px-2 sm:px-3 hover:border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/Products'}>Products</Link>
            </li>
            {!user && (
                <>
                    <li className="border-b-2 bg-white text-black px-2 sm:px-3 hover:border-blue-500 hover:scale-105 transition-transform duration-300">
                        <Link to={'/Register'}>Register</Link>
                    </li>
                    <li className="border-b-2 bg-white text-black px-2 sm:px-3 hover:border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to={'/Login'}>Log in</Link>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li className="border-b-2 bg-white text-black px-2 sm:px-3 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link to={'/UserDashBoard'}>{user?.name || 'User'}</Link>
                    </li>
                    <li
                        className="border-b-2 bg-white text-black px-2 sm:px-3 hover:border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                        onClick={logout}
                    >
                        Logout
                    </li>
                </>
            )}
            <li className="border-b-2 bg-white text-black px-2 sm:px-3 hover:border-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/cart'}>Cart</Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gray-50 w-full sticky top-0 shadow-md">
            <div className="flex flex-col items-center py-3 px-5 lg:px-8">
                
                {/* Logo Centered on the First Row */}
                <div className="w-full text-center mb-2">
                    <Link to={'/'}>
                        <h2 className="font-bold text-black text-3xl lg:text-4xl">A1 Store</h2>
                    </Link>
                </div>

                {/* Navbar Links in a Row on Larger Screens, Wraps on Smaller Screens */}
                <div className="w-full flex flex-wrap justify-center">
                    {navbar_list}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
