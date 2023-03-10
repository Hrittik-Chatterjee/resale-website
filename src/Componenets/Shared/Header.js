import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const {user,logOut}= useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
       
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/watchComName/63890be46ece7a31c5913c5c'}>Rolex</Link></li>
                        <li><Link to={'/watchComName/63890be46ece7a31c5913c5d'}>Patek Philippe</Link></li>
                        <li><Link to={'/watchComName/63890be46ece7a31c5913c5e'}>Omega</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Desired Watch</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/watchComName/63890be46ece7a31c5913c5c'}>Rolex</Link></li>
                    <li><Link to={'/watchComName/63890be46ece7a31c5913c5d'}>Patek philippe</Link></li>
                    <li><Link to={'/watchComName/63890be46ece7a31c5913c5e'}>Omega</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                </ul>
            </div>
            {
                user && user?.uid ?
                    <div className="navbar-end">
                        <Link to='/login' className="btn" onClick={handleLogOut}>Logout</Link>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to={'/login'} className="btn">Login</Link>
                   </div>
            }
            
        </div>
    );
};

export default Header;