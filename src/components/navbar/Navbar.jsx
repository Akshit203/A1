import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../search/Search';


const Navbar =()=> {

    const navbar_list = (

        <ul className="flex py-3 space-x-7 text-white font-medium text-1xl px-5 pt-4 ">
            
            <li className="border border-white bg-white text-black rounded-sm px-3 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/'}>Home</Link>
            </li>
            
            <li className="border border-white bg-white text-black rounded-sm px-3 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/allproduct'}>Products</Link>
            </li>
            
            <li className="border border-white bg-white text-black rounded-sm px-3 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/signup'}>Register</Link>
            </li>
           
            <li className="border border-white bg-white text-black rounded-sm px-3 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/'}>Log in</Link>
            </li>

            {/* Admin */}
            {/* <li>
            </li> */}

            {/* logout */}
            {/* <li>
            </li> */}

           
            <li className="border border-white bg-white text-black  rounded-sm px-3 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Link to={'/cart'}> Cart</Link>
            </li>

        </ul>
    )
    return (
        <nav className="bg-blue-500 sticky top-0 min-h-15 ">
            
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">

                {/* Logo  */}

                <div className="left mt-2 lg:py-2">
                    <Link to={'/'}>
                    <h2 className=" font-bold text-white text-4xl text-center">A1 Store</h2>
                    </Link>
                </div>

                {/* NavBar List items  */}

                <div className="right flex justify-center mb-4 lg:mb-0 ">
                    {navbar_list}
                </div>

                {/* Search Bar  */}
                <Search />
            </div>
        </nav>
    );
}

export default Navbar
