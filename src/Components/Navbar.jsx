import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import logo from '../assets/streetsaver_logo.webp'


const Navbar = () => {
    const [toggel, setToggel] = useState();
    return (
        <div className=' bg-[#b83cb8]   w-full py-[5px] '>
            <div className=' bg-[#b83cb8] h-[80px]  w-full py-[10px] items-center   flex justify-between'>



                {
                    toggel ?
                        <AiOutlineClose onClick={() => setToggel(!toggel)} className=' text-white p-1 rounded-full bg-black md:hidden block ml-5 text-3xl' />
                        :
                        <AiOutlineMenu onClick={() => setToggel(!toggel)} className='text-white p-1 rounded-full bg-black md:hidden block  ml-5 text-3xl' />
                }



                <ul className='md:flex hidden text-black gap-10 md:ml-[50px]   mt-6 ' >
                    <BsSearch className=' bg-[#000] text-3xl text-white p-2 rounded-md ' />
                    {/* <input type="text"  placeholder='Search' /> */}
                    <li className='text-[18px] font-bold  hover:text-white'>

                        <a href="" >Home</a>
                    </li>
                    <li className='text-[18px] font-bold  hover:text-white'><a href="">Shop Catagories</a></li>
                    <li className='text-[18px] font-bold  hover:text-white'><a href="">Instagram</a></li>
                    <img src={logo} alt="" className='h-[80px]   ml-[230px] mt-[-20px]' />

                    <div className='flex  mt-[5px]  ml-[300px]'>

                        <button className=' mx-5  bg-black text-white p-[3px]  text-[13px] h-8 w-[60px] hover:bg-slate-400 rounded-full'>Login </button>
                        <button className='flex    bg-black text-white p-[6px] text-[13px] h-8 hover:bg-slate-400 rounded-md'>Cart/Rs0.00<AiOutlineShoppingCart className='ml-2   text-2xl font-extrabold ' /></button>
                    </div>

                </ul>

                {/* Responsive */}

                <ul className={` md:hidden text-white fixed z-50   w-full left-0 h-[60vh] px-2 bg-black  top-[80px]  ${toggel ? "left-[0]" : "left-[-100%]"}`} >
                    <li className='text-[18px] font-bold  hover:text-white py-5 ml-5'>

                        <a href="">Home</a>
                    </li>
                    <li className='text-[18px] font-bold ml-5 hover:text-white py-5'><a href="">Shop Catagories</a></li>
                    <li className='text-[18px] font-bold ml-5 hover:text-white py-5'><a href="">Instagram</a></li>
                    <button className=' mx-5  my-10 bg-purple-900 text-white p-[5px]  text-[15px] h-10 w-[60px] hover:bg-slate-400 rounded-full'>Login </button>
                </ul>
                <img src={logo} alt="" className='h-[60px] md:hidden' />
                <AiOutlineShoppingCart className='md:hidden    font-extrabold mx-5 text-3xl text-white p-1 rounded-md bg-black' />
            </div>
        </div >
    )
}

export default Navbar