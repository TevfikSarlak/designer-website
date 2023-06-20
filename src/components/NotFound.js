import React from "react";
import { Link, useRouteError } from "react-router-dom";


export default function NotFound()  {
    const error = useRouteError();
    console.error(error);
  
    return (
      <>
        <div className="flex items-center justify-center h-screen font-sans">
          <div className="bg-white">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl text-black lg:text-6xl">
                404
              </h1>
  
              <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-600">Oops!</span> Page{" "}
                {error.statusText}
              </h6>
              <p className="mb-4 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>

            <Link
              to="/"
              className="px-5 py-2 rounded-md text-white border-2 border-black bg-black
                        hover:bg-white hover:text-black focus:bg-gray-100"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}