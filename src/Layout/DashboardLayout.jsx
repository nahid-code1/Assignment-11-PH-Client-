import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoBookSharp } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            {/* Drawer toggle */}
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* Drawer content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost lg:hidden">
                        {/* Hamburger icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <div className="px-4">Navbar Title</div>
                </nav>

                {/* Page content */}
                <Outlet />
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <div className="w-64 bg-base-200 flex flex-col p-4 gap-2">
                    <ul className="menu w-full gap-4">
                        <li>
                            <Link to="/">
                                <span>Homepage</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/my-orders">
                                <IoBookSharp /> My Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/my-profile">
                                <CgProfile /> My Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/invoices">
                                <FaFileInvoiceDollar /> Invoices
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;