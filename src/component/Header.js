import React, { useEffect,useState,useRef } from "react";
import {BsArrowRightSquareFill,BsArrowLeftSquareFill} from 'react-icons/bs'
import {CgMenuLeft} from 'react-icons/cg'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {ImSwitch} from 'react-icons/im'
import {RxCross1} from 'react-icons/rx'
import { useNavigate } from "react-router-dom";

export default function Header(props){
    const ref = useRef(null);
    const { onClickOutside } = props;
    const [profileSetting, setProfileSetting] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
            setProfileSetting(false)
            onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
        document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ onClickOutside ]);

    const navigate_path = useNavigate();
    return(
        <div className="header_main">
            <div className="header_inner"> 
                <div className="flex items-center gap-x-4">
                    <span className="text-3xl text-primary"
                        onClick={()=>props.setSidebarExp(!props.sidebarExp)}
                        >{props.sidebarExp ?
                            <span><BsArrowRightSquareFill className="hidden lg:block" /><CgMenuLeft className="block lg:hidden"/></span>
                            :<span> <BsArrowLeftSquareFill className="hidden lg:block" /><CgMenuLeft className="block lg:hidden"/></span>
                        }
                    </span>
                    {props.sidebarExp ? 
                    <span className="hidden lg:block"><img src='images/site-logo.png' className='block max-w-110px mx-auto cursor-pointer' onClick={()=>navigate_path('/home')} /></span>
                    : null
                    }
                    <span className="block lg:hidden"><img src='images/site-logo.png' className='block max-w-110px mx-auto cursor-pointer' onClick={()=>navigate_path('/home')} /></span>
                    {/* <div className="relative">
                        <span className="text-xl absolute top-1/2 left-3 flex -translate-y-1/2"><TfiSearch /></span>
                        <input type="search" name="search_main" className="block pl-11 p-2 w-full border border-solid border-black/25 rounded-30px outline-none" />
                    </div> */}
                </div>
                {/* profile part  */}
                <div ref={ref} className="flex items-center gap-1 sm:gap-3 px-2 sm:px-5 bg-black relative">
                    <span onClick={()=>setProfileSetting(!profileSetting)} className="capitalize h-full cursor-default text-white font-medium flex items-center text-xs sm:text-base">Sunil G <span className="text-2xl"><MdOutlineKeyboardArrowDown /></span></span>
                    <img src="images/admin.jpg" className="block w-8 h-8 sm:w-11 sm:h-11 rounded-full sm:p-1 sm:border-2 sm:border-tertiary" />
                    {/* profile popup  */}
                    <ul className={profileSetting ? 'absolute mt-2 top-full left-auto right-3 w-full bg-white shadow-md border border-solid border-black/10 block' : 'absolute mt-2 top-full left-auto right-0 w-full bg-white shadow-md border border-solid border-black/10 hidden'}>
                        <li className="font-medium flex text-sm px-3 py-1 my-2 items-center gap-2 cursor-pointer"><span><BiUser /></span> Profile</li>
                        <li className="font-medium flex text-sm px-3 py-1 my-2 items-center gap-2 cursor-pointer"><span><FiSettings /></span> Account Settings</li>
                        <li className="font-medium flex text-red-500 text-sm px-3 py-1 my-2 items-center gap-2 pt-3 border-t-2 border-solid border-black/10 cursor-pointer" 
                        onClick={()=>{localStorage.removeItem("authData");localStorage.removeItem("token");navigate_path('/')}}
                        ><span><ImSwitch /></span> Logout</li>
                    </ul>
                </div>  
            </div>
        </div>
    )
}