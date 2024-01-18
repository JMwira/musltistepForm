import React from 'react'

const one = ({action, data}) => {
  return (
    <div className='flex w-full flex-col' >
        <span className='text-3xl font-extrabold' >Personal info</span>
        <span className='text-slate-400 font-semibold' >Please provide your name, email address, and phone number</span>

        <div className='mt-10 flex flex-col gap-4 justify-end items-end font-semibold ' >
            <div className='flex flex-col w-full' >
            <span>Name</span>
            <input type="text" value={data.name} name="name" onChange={action} placeholder='Name' autoComplete='false' className='p-2 py-3 border-[2.5px] rounded-md border-slate-300 outline-none' required />
            </div>
            <div className='flex flex-col w-full' >
            <span>Email Address</span>
            <input type="text" value={data.email} name="email" onChange={action} placeholder='write here your email' className='p-2 py-3 border-[2.5px] rounded-md border-slate-300 outline-none' required />
            </div>
            <div className='flex flex-col w-full' >
            <span>Phone Number</span>
            <input type="tel" value={data.phone} name="phone" onChange={action} placeholder='eg 0973 281 762' className='p-2 py-3 border-[2.5px] rounded-md border-slate-300 outline-none' required />
            </div>
        </div>
    </div>
  )
}

export default one
