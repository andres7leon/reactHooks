import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='./'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='./About'>About</NavLink>
                </li>
                <li>
                    <NavLink to='./Login'>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
