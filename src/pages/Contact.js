import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

  const [state, handleSubmit] = useForm("xgebnlvw");

  if (state.succeeded) {
      return <p className='flex flex-col mx-auto justify-center items-center
      mt-72 mb-60 font-sans text-2xl font-bold'>Thanks for sending a message. We will be in touch shortly!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='flex flex-col my-60 mx-6 md:mx-36'>
        <h1 className='flex flex-col justify-center font-sans text-xl md:text-4xl underline my-12'>Contact</h1>
      <label htmlFor="name" 
      className="flex flex-row ml-6 md:ml-36  font-sans text-md border-gray-300 rounded-md ">
        Name:
      </label>
      <input
        id="name"
        type="name" 
        name="name"
        placeholder="Enter your name"
        className='flex flex-col mx-6 md:mx-36 border-2 border-gray-400 font-sans text-md rounded-md
        h-8 p-4 mt-2 mb-8 focus:ring-1 focus:border-blue-400 focus:ring-blue-400 !important focus:outline-none'
      />

      <label htmlFor="email" 
      className="flex flex-row ml-6 md:ml-36  font-sans text-md border-gray-300 rounded-md ">
        Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Enter your email"
        className='flex flex-col mx-6 md:mx-36 border-2 border-gray-400 font-sans text-md rounded-md
        h-8 p-4 mt-2 mb-8 focus:ring-1 focus:border-blue-400 focus:ring-blue-400 !important focus:outline-none'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message" 
      className="flex flex-row ml-6 md:ml-36  font-sans text-md border-gray-300 rounded-md ">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        className='flex flex-col mx-6 md:mx-36 border-2 border-gray-400 font-sans text-md rounded-md
        h-48 p-4 mt-2 mb-8 focus:ring-1 focus:border-blue-400 focus:ring-blue-400 !important focus:outline-none'

      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}
              className='mx-auto px-8 justify-center items-center bg-black rounded-md text-white hover:bg-white hover:border-black hover:border-2 hover:text-black 
                       h-12 hover:font-semibold transition-opacity duration-300 font-sans'
                        style={{ opacity: 1 }}
                        onFocus={(e) => e.target.style.opacity = 0.8}
                        onBlur={(e) => e.target.style.opacity = 1}>
        Submit
      </button>
    </form>
  );
}