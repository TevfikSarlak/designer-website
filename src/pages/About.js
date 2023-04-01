import React, { useEffect } from "react";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <div className="flex flex-col text-left text-lg md:m-60 mx-auto font-sans mb-24 mt-60">
           <p className="pl-4 ">
                <p className="indent-8">As a yacht and boat designer with extensive experience in both exterior and interior design,
                I bring a unique perspective to the world of marine design. Since 2013, I have been working
                in this field, refining my skills and expanding my knowledge in areas such as engineering calculations,
                production design, and general arrangement.</p><br></br>
                
                <p className="indent-8">One of my greatest strengths is my ability to create stunning renderings and 3D models that bring
                a client's vision to life. I am also highly skilled in weight calculations, performance and speed
                testing, and production drawings, ensuring that every aspect of a project is meticulously planned
                and executed.</p><br></br>

                <p className="indent-8">In addition to my design expertise, I possess a broad range of programming skills that allow me to
                bring even the most complex designs to life. My proficiency in programs such as Photoshop, Illustrator, 
                3D Max Vray, Solidworks, Keyshot, Autocad, Ms office, Ms Excel, Rhino, Blender, Lumion, Indesign, and Figma
                ensures that I can handle any project that comes my way.</p><br></br>

                <p className="indent-8">I graduated from Maltepe University, and my dedication to my craft has earned me a reputation as a skilled
                and reliable yacht and boat designer. Whether you need assistance with a new build, renovation, or refit, 
                I have the expertise and experience necessary to bring your project to life.</p>
            </p>
        </div>
    )
}
