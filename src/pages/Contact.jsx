import React from "react";



const Contact = () => {
  return (
    <div className=" max-w-[1240px] m-auto md:mx-20  md:ml-5  mx-40 ml-[20px]">
      <div className=" mx-10 flex flex-col md:flex-row justify-between w-full   text-black ">
        <form className="  md:w-2/5 space-y-5 ">
          <h1 className="text-5xl font-extrabold  my-10 text-center">Contact us </h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className=" py-3 my-5 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className=" py-3 my-5 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="enter your email"
            />
          </div>
          <div className=" flex flex-col ">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className=" py-3 my-5 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="enter your number"
            />
            <button className="relative inline-flex items-center mt-20 ml-10 w-[150px] hover:bg-[#dd4949] border border-[4px] b p-[10px]   text-black text-2xl justify-start px-5 my-7 border border-black overflow-hidden text-1xl font-bold rounded-full group"> Massage</button>
          </div>

          <div className=" flex flex-row justify-center">
           
          </div>
        </form>

        <div className=" max-w-[1240px] m-auto      ">
          
          <img className=" rounded-md md:w-[500px] mt-40 md:h-[300px] w-[500px] ml-10 h-[300px] "   />
          <p className="text-center ml-10 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
             Expedita earum veritatis dolor omnis cumque animi<br></br>
              aliquam! Eius possimus ducimus, tempore nobis, <br></br>
              iste recusandae, cum consectetur<br></br>
               sunt ut est vero. Quae.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;