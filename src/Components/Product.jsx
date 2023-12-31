import React, { useRef, useState } from 'react';
import cat1 from '../assets/cat1.jpg'
import {AiFillHeart } from 'react-icons/ai'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
        <div className='position: absolute    before:content-[attr(before)] max-w-[1240px] mx-10 z-10  m-auto   md:w-[100%] my-5 h-[1px] rounded-full bg-[white]'>
                        
                        <h1 className='text-center mt-[-10px] mx-20 bg-none font-bold text-white'>BEST SELING PRODUCT</h1>

                    </div>
            <div className=' my-5  mt-36 m-auto'>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    
                    <SwiperSlide className='md:flex hidden'>
                        <div className='md:grid md:grid-cols-4 mx-10 cursor-pointer gap-5'>
                          
                           
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            
                            

                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className='md:flex hidden'>
                        <div className='md:grid md:grid-cols-4 mx-10 cursor-pointer gap-5'>
                          
                           
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className='md:w-[350px] w-[200px] h-[300px]   md:h-[400px] object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-400px]  hover:mr-5 mx-5    '>
                                <AiFillHeart className='text-purple-800 border-purple-800 text-4xl border-[2px] p-2 rounded-full mt-2  '/>
                                </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='mx-10 mt-4 text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            
                            

                        </div>
                        
                    </SwiperSlide>



                    {/* Respnsive */}


                    
                    <SwiperSlide className='md:hidden flex'>
                        <div className='grid grid-cols-2 mx-3 cursor-pointer gap-5'>
                          
                        <div className=''>
                           
                           
                           <img src={cat1} alt="" className=' w-[250px] h-[250px]    object-cover mix-blend-overlay hover:border-red-800 ' />
                           <div className='float-right  mt-[-250px]  hover:mr-5  mx-3   '>
                           <AiFillHeart className='text-purple-800 border-purple-800 text-2xl border-[2px] p-1 rounded-full mt-2  '/>
                           </div>
                   
                           <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='text-center mx-3 mt-2 text-[17px] text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                       </div>
                          
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className=' w-[250px] h-[250px]    object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-250px]  hover:mr-5  mx-3   '>
                           <AiFillHeart className='text-purple-800 border-purple-800 text-2xl border-[2px] p-1 rounded-full mt-2  '/>
                           </div>
                        
                           <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                   <p className='text-center mx-3 mt-2 text-[17px] text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                   <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                               </div>
                            </div>
                            
                            
                            

                        </div>
                        
                    </SwiperSlide>






                    <SwiperSlide className='md:hidden flex'>
                        <div className='grid grid-cols-2 mx-3 cursor-pointer gap-5'>
                          
                        <div className=''>
                           
                           
                           <img src={cat1} alt="" className=' w-[250px] h-[250px]    object-cover mix-blend-overlay hover:border-red-800 ' />
                           <div className='float-right  mt-[-250px]  hover:mr-5  mx-3   '>
                           <AiFillHeart className='text-purple-800 border-purple-800 text-2xl border-[2px] p-1 rounded-full mt-2  '/>
                           </div>
                   
                           <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='text-center mx-3 mt-2 text-[17px] text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                       </div>
                          
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className=' w-[250px] h-[250px]    object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-250px]  hover:mr-5  mx-3   '>
                           <AiFillHeart className='text-purple-800 border-purple-800 text-2xl border-[2px] p-1 rounded-full mt-2  '/>
                           </div>
                        
                           <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='text-center mx-3 mt-2 text-[17px] text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            
                            
                            

                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide className='md:hidden flex'>
                        <div className='grid grid-cols-2 mx-3 cursor-pointer gap-5'>
                          
                        <div className=''>
                           
                           
                           <img src={cat1} alt="" className=' w-[250px] h-[250px]    object-cover mix-blend-overlay hover:border-red-800 ' />
                           <div className='float-right  mt-[-250px]  hover:mr-5  mx-3   '>
                           <AiFillHeart className='text-purple-800 border-purple-800 text-2xl border-[2px] p-1 rounded-full mt-2  '/>
                           </div>
                   
                           <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='text-center mx-3 mt-2 text-[17px] text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                       </div>
                          
                            <div className=''>
                           
                           
                                <img src={cat1} alt="" className=' w-[250px] h-[250px]    object-cover mix-blend-overlay hover:border-red-800 ' />
                                <div className='float-right  mt-[-250px]  hover:mr-5  mx-3   '>
                           <AiFillHeart className='text-purple-800 border-purple-800 text-2xl border-[2px] p-1 rounded-full mt-2  '/>
                           </div>
                        
                                <div className='hover:bg-[#4d4848] hover:text-white  hover:mt-[-20px] duration-300'>
                                   
                                    <p className='text-center mx-3 mt-2 text-[17px] text-white'>Full Tang Columbia Knife SA27 ( Dark Brown Handle )</p>
                                    <h1 className='text-center my-2 font-bold text-white'>Rs1300.00</h1>
                                </div>
                            </div>
                            
                            
                            

                        </div>
                        
                    </SwiperSlide>
                    
                    
                    

                </Swiper>
            </div>
        </>
    );
}
