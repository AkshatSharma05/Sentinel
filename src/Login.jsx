import React from "react";
import "./Login.css";
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {Link} from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        
    return (
        
        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
        </style>
            <div className = 'nav'>
            <div className='logotext'>SENTINEL</div>
            </div>
            <div className="login-form">
            <TextField label="Username or Email" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <Link to="/AppPage" className='button'>
            <Button variant="contained" color="primary">Login</Button>
            </Link>
        </div>
        </>
    );
}

export default Login;