import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <p>{user && <span>{user.displayName}</span>}</p>
        </div>
    );
};

export default Home;