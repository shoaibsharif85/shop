import React from 'react'
import shiping from '../assets/shipping-icon.webp'
import service from '../assets/service-icon.webp'
import custom from '../assets/no-custom-icon.webp'

const Service = () => {
    return (
        <div className=' mx-5  mt-20'>
            <div className='md:grid md:grid-cols-3'>
                <div className='md:border md:border-[2px] ml-5 md:border-t-0 md:border-b-0   md:border-l-0 '>
                    <div className='mt-40'>
                        <img src={shiping} alt="" className='border ml-5 border-purple-800 p-[80px] hover:bg-purple-800 mt-[-150px] w-[250px]  md:w-[300px] border-[1px] rounded-full ' />

                    </div>
                    <h1 className='text-center font-bold  text-white mt-10 md:ml-[-70px] '>
                        FREE SHIPPING ON ALL ORDERS
                    </h1>
                    <h1 className='text-center text-[15px] md:text-[18px] text-white my-3 md:ml-[-50px]'>Get free shipping on all orders over Pkr 5000/-</h1>
                </div>
                <div className='md:border md:border-[2px]  md:border-t-0 md:border-b-0   md:border-s-black '>
                    <div className='mt-40 '>
                        <img src={service} alt="" className='border ml-10 border-purple-800 p-[80px] hover:bg-purple-800 mt-[-150px] w-[250px]  md:w-[300px] border-[1px] rounded-full ' />

                    </div>
                    <h1 className='text-center font-bold text-white mt-10 md:ml-[-70px] '>
                        FREE SHIPPING ON ALL ORDERS
                    </h1>
                    <h1 className='text-center text-[18px] text-white my-3 md:ml-[-50px]'>Get free shipping on all orders over Pkr 5000/-</h1>
                </div>
                <div className=' ml-10    '>
                    <div className='mt-40'>
                        <img src={custom} alt="" className='border border-purple-800 p-[80px] hover:bg-purple-800 mt-[-150px]  w-[250px]  md:w-[300px] border-[1px] rounded-full ' />

                    </div>
                    <h1 className='text-center font-bold text-white mt-10  md:ml-[-70px] '>
                        FREE SHIPPING ON ALL ORDERS
                    </h1>
                    <h1 className='text-center text-[18px] ml-[-20px] text-white my-3 md:ml-[-50px]'>Get free shipping on all orders over Pkr 5000/-</h1>
                </div>
            </div>
        </div>
    )
}

export default Service