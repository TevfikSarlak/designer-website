import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout(props) {
    return (
        <div>
          
          <Navbar darkMode={props.darkMode} handleDarkMode={props.handleDarkMode}/>

            <main>
                <Outlet />
            </main>

         <Footer />
        </div>

    )
}