import React, { useRef } from 'react'
import { FaSortDown } from "react-icons/fa";

const UseRef = () => {
  const MenuBar = useRef();

  const handleMenu = () => {
    if (MenuBar.current.style.right === "0%") {
      MenuBar.current.style.right = "100%"; // Hides the menu
    } else {
      MenuBar.current.style.right = "0%"; // Shows the menu
    }
  };

  return (
    <>
      <div className="w-full h-screen relative bg-[#131549]">
        {/* Nav-Section */}
        <nav className='p-12 flex justify-between items-center'>
          <div className="logo">
            <img src="https://www.netsolpk.com/images/netsol-logo-white.svg" alt="" width={40} />
          </div>
          <p className='text-white flex items-center gap-1'>
            English <FaSortDown className='cursor-pointer' />
          </p>
        </nav>

        {/* Hero-Section */}
        <div className="Hero p-12 relative w-full flex flex-col justify-center">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1 w-max">
              <p className='text-white font-mono uppercase font-light'>Menu</p>
              <div onClick={handleMenu} className="flex flex-col gap-1 cursor-pointer">
                <span className='h-[0.1rem] rounded-full w-full bg-white'></span>
                <span className='h-[0.1rem] rounded-full w-full bg-white'></span>
                <span className='h-[0.1rem] rounded-full w-full bg-white'></span>
              </div>
            </div>

            <div>
              <p className='text-8xl font-mono font-semibold text-[#1C72B8]'>adaptive</p>
              <p className='text-white text-3xl font-semibold'>
                to your business, your growth & the future.
              </p>
              <p className='text-white text-2xl font-light'>
                Proudly serving the world's top asset finance & leasing companies with smart software technology.
              </p>
            </div>
          </div>

          {/* Explore Button */}
          {/* <div className="absolute h-16 w-16 bottom-10 cursor-pointer p-1 rounded-full border-2 flex hover:bg-white hover:text-black transition-all duration-300 items-center uppercase text-[0.8rem] justify-center border-white right-[50%] text-white">
            Explore
          </div> */}
        </div>

        {/* Side Menu */}
        <div
  ref={MenuBar}
  className="w-full h-screen fixed top-0 right-[100%] bg-[#151763]/80 backdrop-blur-md transition-all duration-500"
>

          <nav className='p-12 flex justify-between items-center'>
            <div className="logo">
              <img src="https://www.netsolpk.com/images/netsol-logo-white.svg" alt="" width={40} />
            </div>
            <p className='text-white cursor-pointer flex items-center border-2 border-white px-6 py-1 hover:bg-white hover:text-black transition-colors rounded-full'>
              Contacts
            </p>
          </nav>


          <div className="Hero p-12 relative w-full flex flex-col justify-center">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1 w-max">
              <p className='text-white font-mono uppercase font-light'>Menu</p>
              <div onClick={handleMenu} className="flex flex-col gap-1 cursor-pointer">
                <span className='h-[0.1rem] rounded-full w-full bg-white'></span>
                <span className='h-[0.1rem] rounded-full w-full bg-white'></span>
                <span className='h-[0.1rem] rounded-full w-full bg-white'></span>
              </div>
            </div>

           

           <div className="Nav-items flex items-center gap-4">
<a href="" className='text-white decoration-0 text-4xl'>Home</a>
<a href="" className='text-white decoration-0 text-4xl'>About</a>
<a href="" className='text-white decoration-0 text-4xl'>Products</a>
<a href="" className='text-white decoration-0 text-4xl'>Investors</a>
<a href="" className='text-white decoration-0 text-4xl'>Consultancy</a>
<a href="" className='text-white decoration-0 text-4xl'>Careers</a>



            
           </div>
          </div>

          {/* Explore Button */}
          {/* <div className="absolute h-16 w-16 bottom-10 cursor-pointer p-1 rounded-full border-2 flex hover:bg-white hover:text-black transition-all duration-300 items-center uppercase text-[0.8rem] justify-center border-white right-[50%] text-white">
            Explore
          </div> */}
        </div>


          
        </div>
      </div>
    </>
  );
};

export default UseRef;
