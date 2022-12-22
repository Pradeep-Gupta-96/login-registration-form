import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/homepage/Home"
import Login from './component/login/Login';
import Register from './component/register/Register';


function App() {
const [user, setUserr] = useState({})
  return (
    <>
      <div className="App">
        <Router>
          <Routes >
          <Route exact path="/"  element={ user && user._id?<Home setUserr={setUserr}/>:<Login setUserr={setUserr}/>}/>
          <Route path="/login"  element={<Login setUserr={setUserr}/>} />
          <Route path="/register"  element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
