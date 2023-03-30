import React from "react";


export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false)

  return (
    <div className="flex flex-row fixed top-0 left-0 right-0 z-50 mx-0 justify-between bg-white font-sans shadow-xl w-full">
      <div className="flex flex-row justify-start items-center  ">
      <img src="../images/hook-logo.jpeg" alt="logo" className="h-16 w-16 mr-4 " />
      <h1 className="font-sans  text-2xl font-bold ">
        Hook
      </h1>
      </div>
      <div class="hidden   pt-6 px-4 h-10 font-sans font-semibold md:flex md:space-x-8 md:justify-end">
                <div class="group">
                  <a href="#home">Home</a>
                  <div
                    className="mx-2 group-hover:border-b  group-hover:border-black "
                  ></div>
                </div>
                <div class="group">
                  <a href="#about" >About</a>
                  <div
                    class="mx-2 group-hover:border-b  group-hover:border-black "
                  ></div>
                </div>
                <div class="group">
                  <a href="#portfolio">Portfolio</a>
                  <div
                    class="mx-2 group-hover:border-b group-hover:border-black "
                  ></div>
                </div>
                <div class="group">
                  <a href="#contact">Contact</a>
                  <div
                    class="mx-2 group-hover:border-b group-hover:border-black"
                  ></div>
                </div>
            </div>

          
  
  <div className="md:hidden max-w-screen-sm">
    <button
      id="menu-btn"
      type="button"
      className={`${isNavOpen ? 'open' : 'hamburger '}  block md:hidden focus:outline-none mr-4 mt-4 items-center`}
      onClick={() => setIsNavOpen(prev => !prev)}
    >
      <span className={isNavOpen ? "open hamburger-top" : "hamburger-top"}></span>
      <span className={isNavOpen ? "open hamburger-middle" : "hamburger-middle"}></span>
      <span className={isNavOpen ? "open hamburger-bottom" : "hamburger-bottom"}></span>
    </button>
  </div>

  <div
    id="menu"
    className={`absolute top-full left-0 w-full py-1 pt-20 pl-12 space-y-3 text-lg text-black
     bg-white ${isNavOpen ? 'flex flex-col' : 'hidden'}`}
  >
    <div className="flex flex-col leading-10">
      <a href="#" className="hover:text-gray-600">Home</a>
      <a href="#about" className="hover:text-gray-600">About</a>
      <a href="#portfolio" className="hover:text-gray-600">Portfolio</a>
      <a href="#contact" className="hover:text-gray-600">Contact</a>
    </div>
  </div>


<style>{`
  .hamburger {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: all 0.25s;
    position: relative;
  }

  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    position: absolute;
    width: 24px;
    height: 2px;
    top: 0;
    left: 0;
    background: black;
    transform: rotate(0);
    transition: all 0.5s;
  }

  .hamburger-middle {
    transform: translateY(7px);
  }

  .hamburger-bottom {
    transform: translateY(14px);
  }

  .open {
    transform: rotate(90deg);
  }

  .open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translateX(6px);
    background: black;
  }

  .open .hamburger-middle {
    display: none;
  }

  .open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translateX(-6px);
    background: black;
  }

  #menu {
    z-index: 50;
  }
`}</style>


    </div>
    
  
  );

  
}
