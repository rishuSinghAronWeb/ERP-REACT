import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RxDashboard} from 'react-icons/rx'
import {BiUser} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {HiBuildingStorefront} from 'react-icons/hi2'
import {FaTasks} from 'react-icons/fa'

export default function Sidebar(){
    const naigate_path = useNavigate();
    return(
        <div className='sidebar-menu'>
            <div className='sidebar-header'>
                <img src='images/site-logo.png' className='block max-w-110px mx-auto cursor-pointer' onClick={()=>naigate_path('/home')} />
            </div>
            <div className='main-menu'>
                <div className='menu-inner'>
                    <ul className='px-3 text-xl text-white font-medium'>
                        <li className='flex hover:bg-white hover:text-primary px-3 py-2 rounded-20px items-center gap-4 cursor-default my-8'><span className='text-2xl'><RxDashboard /></span> Dashboard</li>
                        <li className='flex hover:bg-white hover:text-primary px-3 py-2 rounded-20px items-center gap-4 cursor-default my-8'><span className='text-2xl'><BiUser /></span> Account</li>
                        <li className='flex hover:bg-white hover:text-primary px-3 py-2 rounded-20px items-center gap-4 cursor-default my-8'><span className='text-2xl'><FaTasks /></span> Tasks</li>
                        <li className='flex hover:bg-white hover:text-primary px-3 py-2 rounded-20px items-center gap-4 cursor-default my-8'><span className='text-2xl'><HiBuildingStorefront /></span> Department</li>
                        <li className='flex hover:bg-white hover:text-primary px-3 py-2 rounded-20px items-center gap-4 cursor-default my-8'><span className='text-2xl'><FiSettings /></span> Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}