import React from 'react';
import './ll.css'


const LoginPage = ({ isLoggedIn, onLogin }) => {
    return(
      <div className='view'>
        <h2>Login page</h2>
        <button
        onClick={onLogin}>
        login
        </button>
      </div>
    );
};
export default LoginPage;
