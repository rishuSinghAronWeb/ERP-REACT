import React, { useState,useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import {RiCloseCircleFill} from 'react-icons/ri'

export default function Layout(){
    const [sidebarExp, setSidebarExp] = useState(false);
    return(
        <div className={sidebarExp ? 'app_wrapper sidebar_collapsed' :'app_wrapper'}>
            {sidebarExp ?
            <div className="block lg:hidden fixed top-0 left-0 right-0 bottom-0 z-10 bg-black/90" onClick={()=>setSidebarExp(false)}>
                <span className="flex absolute top-5 right-5 text-4xl text-white" onClick={()=>setSidebarExp(false)}><RiCloseCircleFill /></span>
            </div>
            : null
            }
            <div className='sidepannel_wrapper'>
                <Sidebar />
            </div>
            <div className='app_content'>
                <Header sidebarExp={sidebarExp} setSidebarExp={setSidebarExp} />
                <div className="px-5 md:px-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}