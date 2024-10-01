'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactForm = () => {

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "defaultServiceId";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "defaultTemplateId";
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID || "defaultUserId";

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    const form = e.target as HTMLFormElement;
    form.reset()
  };
  return (
        <motion.form 
          className='w-full md:w-[600px] bg-white rounded-3xl shadow-xl p-8'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleOnSubmit}
        >
          {/* Image Icon */}
          <div className='flex justify-center mb-6'>
            <img src='/sam-contact.png' alt='Contact Icon' width={89} height={89} />
          </div>
  
          {/* Email */}
          <div className='mb-6'>
            <label htmlFor="user_email" className='block text-[#2F5D62] font-semibold mb-2'>
              <span className='fa fa-envelope mr-2'></span>Email<span className='text-[#e94747]'> *</span>
            </label>
            <input 
              type="email" 
              id="user_email" 
              name="user_email" 
              placeholder='Your email address'
              ref={emailRef} 
              required
              className='w-full bg-[#f1f3f5] py-3 px-4 rounded-lg border-none focus:ring-2 focus:ring-[#2F5D62]'
            />
          </div>
  
          {/* Full Name */}
          <div className='mb-6'>
            <label htmlFor="user_name" className='block text-[#2F5D62] font-semibold mb-2'>
              <span className='fa fa-user mr-2'></span>Full Name<span className='text-[#e94747]'> *</span>
            </label>
            <input 
              type="text" 
              id="user_name" 
              name="user_name" 
              placeholder='Your full name' 
              ref={nameRef}
              required
              className='w-full bg-[#f1f3f5] py-3 px-4 rounded-lg border-none focus:ring-2 focus:ring-[#2F5D62]'
            />
          </div>
  
          {/* Subject */}
          {/* <div className='mb-6'>
            <label htmlFor="subject" className='block text-[#2F5D62] font-semibold mb-2'>
              <span className='fa fa-info-circle mr-2'></span>Subject<span className='text-[#e94747]'> *</span>
            </label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder='Message subject'
              required
              className='w-full bg-[#f1f3f5] py-3 px-4 rounded-lg border-none focus:ring-2 focus:ring-[#2F5D62]'
            />
          </div> */}
  
          {/* Message */}
          <div className='mb-6'>
            <label htmlFor="message" className='block text-[#2F5D62] font-semibold mb-2'>
              <span className='fa fa-comment-alt mr-2'></span>Message<span className='text-[#e94747]'> *</span>
            </label>
            <textarea 
              id="user_message" 
              name="user_message" 
              rows={6} 
              placeholder='Write your message here...' 
              required
              ref={messageRef}
              className='w-full bg-[#f1f3f5] py-3 px-4 rounded-lg border-none focus:ring-2 focus:ring-[#2F5D62]'
            ></textarea>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            className='w-full py-3 px-6 bg-[#2F5D62] text-white font-bold rounded-full hover:bg-[#244d50] hover:scale-105 transition-transform shadow-lg'
          >
            Send Message
          </button>
        </motion.form>

  )
}

export default ContactForm