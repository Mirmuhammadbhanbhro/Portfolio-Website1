import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-8'>
          <h2>Build Your form</h2>
          <p className='text-gray-500 text-[18px] pt-2'>
            fill the form.
          </p>
          <div className='flex gap-3 items-center'>
          </div>
        </div>
        <div className='space-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input type="text" 
              className='h-[40px] bg-transparent border border-red'
              id='name'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Email</label>
            <input type="text" 
              className='h-[40px] bg-transparent border border-red'
              id='email'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Message</label>
            <textarea 
              className='bg-transparent border border-red'
              id='msg' rows={8}>
              </textarea>
          </div>
          <button className='bg-red-400 p-2 px-6 pt-2'>Submit</button>
        </div>
      </div>
    </div>
  );
}


export default Contact;
