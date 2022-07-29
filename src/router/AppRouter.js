import "./AppRouter.css"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import Bills from "../pages/Bills";
import FileManager from "../pages/FileManager";
import Messages from "../pages/Messages";
import NumberFa from "../pages/NumberFa";
import Order from "../pages/Order";
import Profile from "../pages/Profile";
import Saved from "../pages/Saved";
import Settings from "../pages/Settings";
import { ResponseFunc, RequestFunc } from "../service/ServiceIntercepter"
import UserCard from "../pages/Users";


const AppRouter = () => {


  return (
    <div>
        <BrowserRouter>
        {/* <ServiceIntercepter/> */}
        <RequestFunc/>
        <ResponseFunc/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/users" element={<UserCard/>} />
                <Route path="/todos" element={<Todos/>} />
                <Route path="/file-manager" element={<FileManager/>} />
                <Route path="/settings/profile" element={<Profile/>} />
                <Route path="/settings/2fa" element={<NumberFa/>} />
                <Route path="/settings/billing" element={<Bills/>} />
                <Route path="/messages" element={<Messages/>} />
                <Route path="/order" element={<Order/>} />
                <Route path="/settings" element={<Settings/>} />
                <Route path="/saved" element={<Saved/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;