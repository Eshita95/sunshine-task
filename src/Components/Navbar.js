import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li>{user ?<button class="btn btn-primary font-bold text-white" onClick={logout}>Sign Out</button>: <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div class="navbar px-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h1 class="text-primary font-bold uppercase text-3xl">Educare</h1>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-2 font-bold text-xl">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;