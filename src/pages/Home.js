import React, {useEffect} from "react";
import DataNavalBoats from '../datas/DataNavalBoats';
import DataWorkBoats from '../datas/DataWorkBoats';
import DataFerry from '../datas/DataFerry';
import DataYachts from '../datas/DataYachts';


export default function Home() {

    const [navalUrl, setNavalUrl] = React.useState(DataNavalBoats[0])
    const [workUrl,  setWorkUrl] = React.useState(DataWorkBoats[0])
    const [ferryUrl, setFerryUrl] = React.useState(DataFerry[0])
    const [yachtUrl, setYachtUrl] = React.useState(DataYachts[0])

    useEffect(() => {
      const images = DataNavalBoats
    
      const intervalId = setInterval(() => {
        setNavalUrl(images[Math.floor(Math.random() * images.length)]);
      }, 10000);
      return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const images = DataWorkBoats
      
        const intervalId = setInterval(() => {
             setWorkUrl(images[Math.floor(Math.random() * images.length)]);
        }, 10000);
        return () => clearInterval(intervalId);
      }, []);

      
      useEffect(() => {
        const images = DataFerry
      
        const intervalId = setInterval(() => {
          setFerryUrl(images[Math.floor(Math.random() * images.length)]);
        }, 10000);
        return () => clearInterval(intervalId);
      }, []);

      
      useEffect(() => {
        const images = DataYachts
      
        const intervalId = setInterval(() => {
          setYachtUrl(images[Math.floor(Math.random() * images.length)]);
        }, 10000);
        return () => clearInterval(intervalId);
      }, []);
  

    return (
      <div>
        <div class="relative w-full">
             <img src="../images/header.jpg" alt="header" class="w-full object-cover max-w-screen-2xl"/>
         
             <div class="">
                 <h1 class="absolute text-2xl text-left bottom-10 p-2 z-10 md:p-16 md:text-6xl font-bold left-10 
                 text-white ">Hook Yachts&Boats Design</h1>
                 <p class="flex flex-row justify-end items-end text-leftt text-sm md:text-2xl text-white md:right-10 
                 absolute bottom-2 right-2 z-10 md:pb-4 md:pr-6">We design your dreams...</p>
             </div>
       </div>
     
        
        <div className="mt-36 flex flex-col justify-center justify-items-center
          mx-auto space-y-6 mb-60">
            <h1 className="text-2xl mx-auto text-center font-semibold flex md:text-4xl text-gray-700 ">
                What we've done and What we offering...    
            </h1>
            
            <p className="text-gray-500 text-md text-center md:text-xl mx-4 mb-24">
                Here is a quick preview of what kind of works we have done. 
                We hope that inspires you about your dream Yacht. 
            </p>

            <div class="flex flex-col md:justify-center mx-auto md:grid md:grid-cols-2  md:gap-16 md:mx-auto ">
                <div class="mb-12 md:mb-0 md:mt-24">
                    <div class="flex flex-col justify-center">
                    <img src={navalUrl} class="object-cover w-full h-60 rounded-t-md ease-in-out duration-500
                      hover:opacity-70"/>
                    <h2 class="text-black text-center pt-4 w-full bg-gray-200 
                    bg-cover pb-4 rounded-b-md font-sans md:gap-y-10 hover:font-semibold">Naval Boat</h2>
                    </div>
                </div>

                <div class="mb-12 md:mb-0 md:mt-24">
                    <div class="flex flex-col justify-center">
                    <img src={workUrl} class="object-cover w-full h-60 rounded-t-md ease-in-out duration-500
                      hover:opacity-70"/>
                    <h2 class="text-black text-center pt-4 w-full bg-gray-200 
                    bg-cover pb-4 rounded-b-md font-sans md:gap-y-10 hover:font-semibold">Work Boat</h2>
                    </div>
                </div>

                <div class="mb-12 md:mb-0">
                    <div class="flex flex-col justify-center">
                    <img src={ferryUrl} class="object-cover w-full h-60 rounded-t-md ease-in-out duration-500
                      hover:opacity-70"/>
                    <h2 class="text-black text-center pt-4 w-full bg-gray-200 
                    bg-cover pb-4 rounded-b-md font-sans hover:font-semibold">Ferry Boat</h2>
                    </div>
                </div>

                <div class="mb-12 md:mb-0">
                    <div class="flex flex-col justify-center" >
                    <img src={yachtUrl} class="object-cover w-full h-60 rounded-t-md ease-in-out duration-500
                      hover:opacity-70"/>
                    <h2 class="text-black text-center pt-4 w-full bg-gray-200 
                    bg-cover pb-4 rounded-b-md font-sans hover:font-semibold">Yachts</h2>
                    </div>
                </div>
            </div>
            
            <div>
                <p className="text-gray-500 text-md text-center md:text-xl mx-4 mt-12 ">
                        If you want to see our work in more detail,  </p>
                        <p className="text-gray-500 text-md md:text-xl mx-4 text-center mb-24 "> you can check the <span> <a href="www.google.com" class="text-blue-600 underline">Portfolio</a> 
                        </span> section. </p>
            </div>

        </div>
      </div>
    )
}