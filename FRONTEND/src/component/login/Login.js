import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "./login.css"

const Login = (props) => {
    const navigate = useNavigate()
    const [User, setUser] = useState({
        email: "",
        password: ""
    })
    const onChangeHendler = (e) => {
        const { name, value } = e.target
        setUser({
            ...User,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:8000/login", User)
            .then(res => {
                alert(res.data.massage)
                props.setUserr(res.data.user)
                navigate("/")
            })


    }
    return (
        <div className="login">
            <h1>login</h1>
            <input type="text" name='email' value={User.email} onChange={onChangeHendler} placeholder='Enter your email' />
            <input type="password" name='password' value={User.password} onChange={onChangeHendler} placeholder='Enter your password' />
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
    )
}

export default Login