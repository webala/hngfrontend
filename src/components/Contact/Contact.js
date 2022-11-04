import React from 'react'
import Footer from '../Footer/Footer'

function Contact() {
  return (
    <div className='flex flex-col sm:items-center px-5 '>
    <div className='py-16 sm:py-24 xl:w-1/2  flex flex-col gap-12 items-start'>
        <div className='flex flex-col items-start'>
            <h1 className='text-3xl font-bold'>Contact Me</h1>
            <p className='opacity-75 mt-5 text-xl'>Hi there, contact me to ask me about anything you have in mind</p>
        </div>

        <form className='sm:w-full'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:gap-5'>
                <div className='flex flex-col items-start sm:w-1/2 mb-10'>
                    <label for='first_name' className='mb-2'>First name</label>
                    <input className='border p-2 border-gray-400 rounded-md h-10 w-full' id='first_name' placeholder='Enter your first namem'/>
                </div>
                <div className='flex flex-col items-start mb-10 sm:w-1/2'>
                    <label for='last_name' className='mb-2'>Last name</label>
                    <input className='border p-2 border-gray-400 rounded-md h-10 w-full' id='last_name' placeholder='Enter your last namem'/>
                </div>
            </div>
            <div className='flex flex-col items-start mb-10'>
                <label for='email' className='mb-2'>Email</label>
                <input className='border p-2 border-gray-400 rounded-md h-10 w-full' id='email' placeholder='yourname@email.com'/>
            </div>
            <div className='flex flex-col items-start mb-10'>
                <label for='message' className='mb-2'>Message</label>
                <textarea className='border p-2 border-gray-400 rounded-md h-44 w-full' id='message' placeholder="Send me a message and i'll reply as soon as possible ..." />
            </div>
            <div className='flex'>
                <input type='checkbox' />
                <p className='ml-2'>You agree to providing your data to Daniel Webala who may contact you</p>
            </div>
            <div className='flex justify-center px-5 mt-10'>
                <button className='w-full text-white rounded-md bg-blue-600 h-12' id='btn__submit' type='submit'>Send message</button>
            </div>
        </form>
        
    </div>
    <Footer />
    </div>
  )
}

export default Contact