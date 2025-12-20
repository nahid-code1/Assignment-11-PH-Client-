import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import useAuth from '../../../assets/hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const [theme, setTheme] = useState("light");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogOUt = () => {
        return logOut()
            .then()
            .catch(error => console.log(error));
    }

    const links = <>
        <li><NavLink to="/" onClick={() => setDropdownOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/books" onClick={() => setDropdownOpen(false)}>Books</NavLink></li>
        <li><NavLink to="/dashboard" onClick={() => setDropdownOpen(false)}>Dashboard</NavLink></li>
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            {/* Navbar start */}
            <div className="navbar-start">
                {/* Hamburger for sm/md */}
                <div className="lg:hidden relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="btn btn-ghost"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {dropdownOpen && (
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-2 p-2 shadow absolute left-0 w-52">
                            {links}
                            {user ? (
                                <li><button onClick={handleLogOUt}>Logout</button></li>
                            ) : (
                                <li><NavLink to="/login" onClick={() => setDropdownOpen(false)}>Login</NavLink></li>
                            )}
                        </ul>
                    )}
                </div>

                <Link to="/"><Logo /></Link>
            </div>

            {/* Navbar center for lg */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* Navbar end */}
            <div className="navbar-end gap-3">
                {user && <button className='btn btn-secondary hidden lg:block' onClick={handleLogOUt}>LogOut</button>}
                {!user && <NavLink className='btn btn-secondary hidden lg:block' to="/login">Login</NavLink>}

                <input
                    type="checkbox"
                    className="toggle toggle-md"
                    checked={theme === "bookdark"}
                    onChange={() =>
                        setTheme(theme === "booklight" ? "bookdark" : "booklight")
                    }
                />
            </div>
        </div>
    );
};

export default NavBar;
