import "./AppRouter.css"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import Users from "../pages/Users";
import Todos from "../pages/Todos";

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <nav className="navbar">
                <li><Link to="/" style={{textDecoration: "none"}}>Home</Link></li>
                <li><Link to="/users" style={{textDecoration: "none"}}>Users</Link></li>
                <li><Link to="/todos" style={{textDecoration: "none"}}>Todos</Link></li>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/todos" element={<Todos/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;