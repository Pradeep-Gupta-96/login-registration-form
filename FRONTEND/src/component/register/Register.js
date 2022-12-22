import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "./register.css"

const Register = () => {
  const navigate=useNavigate()
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: ""
  })
  const onchangeHandler = (e) => {
    const { name, value } = e.target
    setUser({
      ...User,
      [name]: value
    })
  }

const register=()=>{
  const{name, email, password, repassword}=User
  if(name && email && password && (password===repassword)){
alert("Posted")
   axios.post("http://localhost:8000/register",User)
   .then(res=>{ console.log(res)
    navigate("/login")
  })
  }else{
    alert("Invaild")
  }

}
  return (
    <div className="register">

      <h1>Register</h1>
      <input type="text" name='name' value={User.name} onChange={onchangeHandler} placeholder='   name' />
      <input type="text" name='email' value={User.email} onChange={onchangeHandler} placeholder='   email' />
      <input type="password" name='password' value={User.password} onChange={onchangeHandler} placeholder='    password' />
      <input type="password" name='repassword' value={User.repassword} onChange={onchangeHandler} placeholder='    re-enter password' />
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button" onClick={()=>navigate("/login")}>Login</div>
    </div>
  )
}

export default Register