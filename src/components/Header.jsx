import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error=>{console.error(error)})
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">AuthMaster</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <>
                        <span className='me-5'>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-xs'>Logout</button>
                    </> : <Link to="/login" className='btn btn-xs'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;