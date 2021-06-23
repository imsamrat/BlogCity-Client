import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="flex justify-between py-3 px-5 absolute w-full text-black bg-green-500 p-2 px-4">
                <div className="logo">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        <Link to="/">Blog City</Link>
                    </h1>
                    
                </div>
                <nav className="">
                    <ul className="flex">
                        <li className="mr-5 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mr-5 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li className="mr-5 p-2 px-4 rounded-full font-semibold transition-all hover:bg-green-800">
                            <Link
                                to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;