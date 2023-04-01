import React, {useEffect, useLocation} from "react";


export default function Navbar(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  //const {currentPage} = props.handlePageChange();
  

//useEffect(()=>{
  //setIsNavOpen(false);
//},[ props.handlePageChange()])

//function navMenuCloser(isNavOpen) {
  //setIsNavOpen(!isNavOpen)
//}
  
  

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
                  <button onClick={()=>props.handlePageChange("Home")}>Home</button>
                  <div
                    className="mx-2 group-hover:border-b  group-hover:border-black "
                  ></div>
                </div>
                <div class="group">
                  <button onClick={()=>props.handlePageChange("About")} >About</button>
                  <div
                    class="mx-2 group-hover:border-b  group-hover:border-black "
                  ></div>
                </div>
                <div class="group">
                  <button onClick={()=>props.handlePageChange("Portfolio")}>Portfolio</button>
                  <div
                    class="mx-2 group-hover:border-b group-hover:border-black "
                  ></div>
                </div>
                <div class="group">
                  <button onClick={()=>props.handlePageChange("Contact")}>Contact</button>
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
    <div className="flex flex-col leading-10 font-sans "  onClick={()=>setIsNavOpen(false)}>
      <button onClick={()=>props.handlePageChange("Home")} className="hover:text-bg-gray-600">Home</button>
      <button onClick={()=>props.handlePageChange("About")} className="hover:text-gray-600">About</button>
      <button onClick={()=>props.handlePageChange("Portfolio")} className="hover:text-gray-600">Portfolio</button>
      <button onClick={()=>props.handlePageChange("Contact")} className="hover:text-gray-600">Contact</button>
    </div>

    <footer class="bg-gray-800 text-center text-white justify-center mt-24">
            <div class="container justify-center  px-6 pt-6">
              <div class="mb-6 flex flex-row items-center justify-center">
              <a
                  href="#!"
                  type="button"
                  class="m-1 h-9 w-9 rounded-full border-2 border-white hover:border-blue-600 uppercase leading-normal
                  text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
              </a>

              <a
                  href="#!"
                  type="button"
                  class="m-1 h-9 w-9 rounded-full border-2 border-white  hover:border-blue-500 uppercase leading-normal
                  text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
              </a>

              <a
                  href="#!"
                  type="button"
                  class="m-1 h-9 w-9 rounded-full border-2 border-white  hover:border-purple-700 uppercase leading-normal
                  text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
              </a>

              <a 
                  href="#!"
                  type="button"
                  class="m-1 h-9 w-9 rounded-full border-2 border-white  hover:border-blue-600 uppercase leading-normal
                  text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
              </a>

              </div>
          </div>
        </footer>
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
