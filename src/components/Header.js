import React from "react";


export default function Header() {
    return (
       <div class="relative w-full">
            <img src="../images/header.jpg" alt="header" class="w-full object-cover max-w-screen-2xl"/>
        
            <div class="">
                <h1 class="absolute text-2xl text-left bottom-10 p-2 z-10 md:p-16 md:text-6xl font-bold left-10 
                text-white ">Hook Yachts&Boats Design</h1>
                <p class="flex flex-row justify-end items-end text-leftt text-sm md:text-2xl text-white md:right-10 
                absolute bottom-2 right-2 z-10 md:pb-4 md:pr-6">We design your dreams...</p>
            </div>
      </div>
    );
}