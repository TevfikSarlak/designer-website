import React, {useEffect, useState} from "react";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Portfolio (props) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      const [imageLoaded, setImageLoaded] = useState(false);
      const {ref, inView} = useInView({
        threshold: 0.95, 
        triggerOnce: true
      });

      const handleImageLoad = () => {
        setImageLoaded(true);
      };

      const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 2,
            delayChildren: 1
          }
        }
      }

      const itemVariants = {
        hidden: {
          x: '-100vw',

        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: 'easeOut'
          }
        }
      }


    return (
        
        <div className="mt-12 mb-12">
             <div class="relative w-full font-sans dark:bg-darkBlue mb-48">
             <img src="../images/portfolio-image.jpg" 
                  alt="Portfolio" 
                  class="w-full h-72 md:h-1/3 shadow-2xl "
                  onLoad={handleImageLoad}
             />
             {!imageLoaded && (
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                    <p className="text-3xl font-semibold text-gray-800 mt-8">Loading...⚓</p>
                </div>
             )}
              <div>
                  <h1 
                        
                       className={`absolute text-4xl text-right bottom-5 md:bottom-10 p-2 md:p-16 md:text-8xl
                        font-extrabold right-5 md:right-10 text-white ${imageLoaded ? '' : 'hidden'}`}>
                    Portfolio
                  </h1>  
              </div>
             
            </div>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                ref={ref}
                whileInView="visible"
            >
               
           <motion.div
                
                variants={itemVariants}

                className={`${props.darkMode ? 'bg-slate-800 text-slate-100' : 'bg-slate-300'}  my-36 font-sans 
                           flex flex-col border-none rounded-lg  mx-6 shadow-xl`}>
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 mb-8">
                    <div>
                        <img src="../slide-images/Ferry/1.jpg" alt="Ferry-Porfolio"
                        className="h-60 md:h-3/4 rounded-t-lg  md:rounded-tr-none w-full"/>
                    </div>
                    <div>
                        <div className="space-y-2 text-left mx-4 mt-4">
                            <h1><span className="text-xl underline">Class:</span> FERRY</h1>
                            <h2 className="text-2xl">Main Particulars</h2>
                            <p>Type: Island Shuttle Ferry</p>
                            <p>Length o.a.: 22,00m</p>
                            <p>Breadth: 5,70m </p>
                            <p>Draught: 1,20m </p>
                            <p>Status: Concept design</p>
                            <p>Year: 2022</p>
                        </div>

                        <div className="mt-24 border-t-2 border-t-slate-600 pt-4 text-left mx-4 space-y-1 items-end">
                            <p><span className="font-semibold underline pr-2 ">Design Description:</span>
                            Island ferry designed for safe and efficient transportation of passengers and 
                            vehicles, featuring spacious decks and comfortable seating areas. The ferry has
                            a sturdy and stable hull, powered by environmentally-friendly engines, and equipped
                            with navigation and safety equipment, such as radar, GPS, and life-saving appliances.
                            The ferry has a modern and stylish design with large windows to provide panoramic views 
                            for passengers during the journey.</p>
                        </div>
                        
                    </div>
                      
                </div>
                 
            </motion.div>

                <motion.div 
                   variants={itemVariants}
                   
                   className={`${props.darkMode ? 'bg-slate-800 text-slate-100' : 'bg-slate-300'}  my-36 font-sans 
                               flex flex-col border-none rounded-lg shadow-xl mx-6`}>            
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 mb-8 ">
                    <div>
                        <img src="../slide-images/NavalBoats/2.jpg" alt="NavalBoats-Porfolio"
                        className="h-60 md:h-3/4 rounded-t-lg  md:rounded-tr-none w-full"/>
                    </div>

                    <div>
                        <div className="space-y-2 text-left mx-4 mt-4">
                            <h1><span className="text-xl underline">Class:</span> NAVAL BOATS</h1>
                            <h2 className="text-2xl">Main Particulars</h2>
                            <p>Type: Fast Attack Craft FAC</p>
                            <p>Length o.a.: 20,50m</p>
                            <p>Breadth: 4,80 </p>
                            <p>Draught: 1,20m </p>
                            <p>Displacement: 20-200 tons (depending on the size and design of the boat)</p>
                            <p>Range: 200-500 nautical miles (370-930 km) at cruising speed</p>
                            <p>Status: Preliminary Design</p>
                            <p>Year: 2021</p>
                        </div>

                        <div className="mt-24 border-t-2 border-t-slate-600 pt-4 text-left mx-4 space-y-1">
                            <p><span className="font-semibold underline pr-2 ">Design Description:</span>
                            Fast Attack Craft (FAC) with sleek and streamlined design for high-speed maneuverability,
                             equipped with advanced communication and sensor systems, and armed with machine guns,
                              cannons, rocket launchers, torpedoes, or mines depending on the mission.</p>
                        </div>
                        
                    </div>   
                     
                  </div>
                
                 
              </motion.div>

            <motion.div 
                    variants={itemVariants}
                 
                    className={`${props.darkMode ? 'bg-slate-800 text-slate-100' : 'bg-slate-300'}  my-36 font-sans 
                       flex flex-col border-none rounded-lg shadow-xl mx-6`}>
               <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 mb-8">
                    <div>
                        <img src="../slide-images/WorkBoats/1.jpg" alt="WorkBoats-Porfolio"
                        className="h-60 md:h-3/4 rounded-t-lg  md:rounded-tr-none w-full"/>
                    </div>
                    <div>
                        <div className="space-y-2 text-left mx-4 mt-4">
                            <h1><span className="text-xl underline">Class:</span> WORK BOATS</h1>
                            <h2 className="text-2xl">Main Particulars</h2>
                            <p>Type: Multicat Workboat</p>
                            <p>Length o.a.: 23,00m</p>
                            <p>Breadth: 7,60m </p>
                            <p>Draught: 2,20m </p>
                            <p>Status: Concept design</p>
                            <p>Displacement: 150-400 tons (depending on the size and design of the boat)</p>
                            <p>Range: 1,500-2,500 nautical miles (2,800-4,600 km) at cruising speed</p>
                            <p>Crew: 3-6 (depending on the size and mission of the boat)</p>
                            <p>Year: 2022</p>
                        </div>

                        <div className="mt-24 border-t-2 border-t-slate-600 pt-4 text-left mx-4 space-y-1">
                            <p><span className="font-semibold underline pr-2 ">Design Description:</span>
                            The Multicat workboat is a versatile and efficient vessel designed for various 
                            offshore and nearshore tasks, such as dredging, marine construction, survey work, 
                            anchor handling, and support for wind farm operations.</p>
                        </div>
                        
                    </div> 
                    
                </div>
                 
            </motion.div>


           <motion.div 
                 variants={itemVariants}
                
                 className={`${props.darkMode ? 'bg-slate-800 text-slate-100' : 'bg-slate-300'}  my-36 font-sans
                           flex flex-col border-none rounded-lg shadow-xl mx-6`}>             
                 <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 mb-8 ">
                    <div>
                        <img src="../slide-images/Yachts/4.jpg" alt="Yachts-Porfolio"
                        className="h-60 md:h-2/3 rounded-t-lg  md:rounded-tr-none w-full" />
                    </div>

                    <div>
                        <div className="space-y-2 text-left mx-4 mt-4">
                            <h1><span className="text-xl underline">Class:</span> YACHTS</h1>
                            <h2 className="text-2xl">Main Particulars</h2>
                            <p>Type: Yacht</p>
                            <p>Length o.a.: 20,70m</p>
                            <p>Breadth: 5,20m </p>
                            <p>Draught: 1,60m </p>
                            <p>Displacement: 32,000 kg</p>
                            <p>Engines: Twin 1200 HP MAN diesel engines</p>
                            <p>Berths: 6 (3 cabins)</p>
                            <p>Status: Concept design</p>
                            <p>Year: 2020</p>
                        </div>

                        <div className="mt-24 border-t-2 border-t-slate-600 pt-4 text-left mx-4 space-y-1">
                            <p><span className="font-semibold underline pr-2 ">Design Description:</span>
                            A modern and stylish yacht with a sleek fiberglass
                            hull and panoramic windows. Its interior features contemporary design, luxurious
                            materials, and modern appliances, including a spacious salon, well-equipped galley, 
                            and three comfortable cabins with ensuite heads. Outside, the yacht has multiple decks
                            designed for relaxation and entertainment, including a large sun pad, comfortable seating,
                            and a spacious flybridge with a wet bar and grill. Overall, the Sunseeker Manhattan 66 is
                            a stunning yacht that combines style, performance, and luxury in an impressive package.</p>
                        </div>
                        
                    </div>
                    
                  </div>
                </motion.div>
                </motion.div>
            
    
            </div>
        
    )
}