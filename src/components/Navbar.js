import React from 'react';
import AddUser from '../assets/AddUser.svg';
import Affiliate from '../assets/Affiliate.svg';
import Board from '../assets/Board.svg';
import Chat from '../assets/Chat.svg';
import Links from '../assets/Links.svg';
import List from '../assets/List.svg';
import Plus from '../assets/Plus.svg';
import User from '../assets/User.svg';
import Progress from '../assets/Progress.svg';
import Welcome from '../assets/Welcome.svg';
import Dashboard from '../assets/Dashboard.svg';
import Setting from '../assets/Setting.svg';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Navbar() { 
  return (
    <main className='h-full w-[272px] px-[32px] py-[38px] bg-[#1D1042]'>
        <div>
            <button className='bg-[#45269C] w-13 h-[48px] p-[14px] rounded-[8px]'>
                    <div className='flex gap-x-2'>
                        <img src={Welcome} alt=''/>
                        <h1 className='font-primary font-normal text-[16px] text-white'>Welcome Keerthi</h1>
                    </div>
                </button>

                {/* Links */}

            <div className='mt-[41px] border-b border-gray gap-y-[33px] flex flex-col'>
                <div className='flex gap-x-2'>
                    <img src={Dashboard} alt=''/>
                    <h1 className='font-primary font-medium text-[14px] text-white'>Dashboard</h1>
                </div>

                <div className='flex gap-x-2'>
                    <img src={Setting} alt=''/>
                    <h1 className='font-primary font-medium text-[14px] text-white'>Setting</h1>
                </div>

                <div className='flex gap-x-2'>
                    <img src={Welcome} alt=''/>
                    <h1 className='font-primary font-medium text-[14px] text-white'>Activities</h1>
                </div>

                <div className='flex gap-x-2'>
                    <img src={User} alt=''/>
                    <h1 className='font-primary font-medium text-[14px] text-white'>User</h1>
                </div>

                <div className='flex gap-x-2'>
                    <img src={AddUser} alt=''/>
                    <h1 className='font-primary font-medium text-[14px] text-white'>Add User</h1>
                </div>

                <div className='flex mb-[33px] gap-x-2'>
                    <img src={Affiliate} alt=''/>
                    <h1 className='font-primary font-medium text-[14px] text-white'>Affiliate</h1>
                </div>
            </div>

            {/* Profile and Settings */}

            <div className='mt-[33px]'>
                <div className='text-[#808080] flex mb-[33px] gap-x-2'>
                    <img src={Welcome} className='text-gray' alt=''/>
                    <h1 className='text-[#808080] font-primary font-medium text-[14px] text-white'>Profile</h1>
                </div>

                <div className='text-[#808080] flex mb-[33px] gap-x-2'>
                    <img src={User} className='text-gray' alt=''/>
                    <h1 className='text-[#808080] font-primary font-medium text-[14px] text-white'>Logout</h1>
                </div>
            </div>
        </div>
        <button className='bg-[#703EFE] mt-[360px] w-13 h-[48px] p-[14px] rounded-[8px]'>
                <div className='flex gap-x-2'>
                    <AiOutlinePlus className='font-bold text-[18px] text-white'/>
                    <h1 className='font-primary font-normal text-[16px] text-white'>NEW PROJECT</h1>
                </div>
        </button> 
    </main>
  )
}
