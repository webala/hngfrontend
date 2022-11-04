import React from 'react'
import Footer from '../Footer/Footer'
import {useState} from 'react'


function Contact() {

    const [message, setMessage] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [submit, setSubmit] = useState(false)

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
    }
  return (
    <div className='flex flex-col sm:items-center px-5 '>
    <div className='py-16 sm:py-24 xl:w-1/2  flex flex-col gap-12 items-start'>
        <div className='flex flex-col items-start'>
            <h1 className='text-3xl font-bold'>Contact Me</h1>
            <p className='opacity-75 mt-5 text-xl'>Hi there, contact me to ask me about anything you have in mind</p>
        </div>

        <form className='sm:w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:gap-5'>
                <div className='flex flex-col items-start sm:w-1/2 mb-5'>
                    <label for='first_name' className='mb-2'>First name</label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
                    className={(submit && !firstName) ? `border p-2 border-red-500 rounded-md h-10 w-full`: `border p-2 border-gray-400 rounded-md h-10 w-full`} id='first_name' placeholder='Enter your first name'/>
                    {(submit && !firstName) && <p className='text-red-500'>Please enter a first name</p>}
                </div>
                <div className='flex flex-col items-start mb-5 sm:w-1/2'>
                    <label for='last_name' className='mb-2'>Last name</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)}
                     className={(submit && !lastName) ? `border p-2 border-red-500 rounded-md h-10 w-full`: `border p-2 border-gray-400 rounded-md h-10 w-full`} id='last_name' placeholder='Enter your last name'/>
                     {(submit && !lastName) && <p className='text-red-500'>Please enter a last name</p>}
                </div>
            </div>
            <div className='flex flex-col items-start mb-5'>
                <label for='email' className='mb-2'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                 className={(submit && !email) || (submit && email && !validEmailRegex.test(email)) ? `border p-2 border-red-500 rounded-md h-10 w-full`: `border p-2 border-gray-400 rounded-md h-10 w-full`} id='email' placeholder='yourname@email.com'/>
                 {(submit && !email) && <p className='text-red-500'>Please enter an email</p>}
                 {(submit && email && !validEmailRegex.test(email)) && <p className='text-red-500'>Please enter a valid email</p>}
            </div>
            <div className='flex flex-col items-start mb-5'>
                <label for='message' className='mb-2'>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} 
                className={(submit && !message) ? `border p-2 border-red-500 rounded-md h-44 w-full`: `border p-2 border-gray-400 rounded-md h-44 w-full`} id='message' placeholder="Send me a message and i'll reply as soon as possible ..." />
                {(submit && !message) && <p className='text-red-500'>Please enter a message</p>}
            </div>
            <div className='flex'>
                <input type='checkbox' className='h-5 w-5 rounded checkbox'/>
                <p className='ml-2'>You agree to providing your data to Daniel Webala who may contact you</p>
            </div>
            <div className='flex justify-center px-5 mt-10'>
                <button className='w-full text-white rounded-md bg-blue-600 hover:bg-blue-400 transition duration-200 ease-in h-12' id='btn__submit' type='submit'>Send message</button>
            </div>
        </form>
        
    </div>
    <Footer />
    </div>
  )
}

export default Contact