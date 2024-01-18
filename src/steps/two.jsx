import React, { useState } from 'react'
import {FaGamepad, FaToggleOff, FaToggleOn} from "react-icons/fa"
import {LuGamepad2} from "react-icons/lu"
import {BiSolidToggleLeft, BiSolidToggleRight} from "react-icons/bi"

const two = ({action, freq, data}) => {
    const [Plan, setPlan] = useState(data.plan)
    const [Toggle, setToggle] = useState(false)
  return (
    <div className='flex w-full flex-col' >
        <span className='text-3xl font-extrabold' >Select your plan</span>
        <span className='text-slate-400 font-semibold' >
            You have the option of monthly or yearly billing
        </span>

        <div className='mt-10 flex flex-row gap-3 font-semibold ' >
            <div className={Plan=='arcade'?' cursor-pointer flex flex-col gap-3 w-1/3 scale-105 rounded-md border-[2px] border-slate-500 shadow-md bg-slate-100 p-2 gap-y-14':' flex flex-col gap-3 w-1/3 rounded-md border-[2px] border-slate-300 p-2 gap-y-14 cursor-pointer'} onClick={()=>{
                setPlan('arcade')
                action('arcade')
            }}  >
                <div className='size-12 bg-secondary rounded-full justify-center items-center flex text-white ' >
                    <FaGamepad/>
                </div>
                <div className='flex flex-col' >
                    <span className='font-bold' >Arcade</span>
                    <span className='text-slate-400'>$9/mo</span>
                </div>
            </div>
            <div className={Plan=='advanced'?' cursor-pointer flex flex-col gap-3 w-1/3 scale-105 rounded-md border-[2px] border-slate-500 shadow-md bg-slate-100 p-2 gap-y-14':' flex flex-col gap-3 w-1/3 rounded-md border-[2px] border-slate-300 p-2 gap-y-14 cursor-pointer'} onClick={()=>{
                setPlan('advanced')
                action('advanced')
            }}  >
                <div className='size-12 bg-primary rounded-full justify-center items-center flex text-white ' >
                    <FaGamepad/>
                </div>
                <div className='flex flex-col' >
                    <span className='font-bold' >Advanced</span>
                    <span className='text-slate-400'>$12/mo</span>
                </div>
            </div>
            <div className={Plan=='pro'?' cursor-pointer flex flex-col gap-3 w-1/3 scale-105 rounded-md border-[2px] border-slate-500 shadow-md bg-slate-100 p-2 gap-y-14':' flex flex-col gap-3 w-1/3 rounded-md border-[2px] border-slate-300 p-2 gap-y-14 cursor-pointer'} onClick={()=>{
                setPlan('pro')
                action('pro')
            }}  >
                <div className='size-12 bg-gradient_2 rounded-full justify-center items-center flex text-white ' >
                    <LuGamepad2/>
                </div>
                <div className='flex flex-col' >
                    <span className='font-bold' >Pro</span>
                    <span className='text-slate-400'>$15/mo</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-3 mt-14 bg-slate-200 p-4 rounded-md' >
            <span className={Toggle?'bg-white cursor-pointer p-1 px-4 rounded-full':' p-1 px-4 cursor-pointer'} onClick={()=>setToggle(true)}>Monthly</span>
            {
                Toggle==true?
                <BiSolidToggleLeft className='text-3xl' onClick={()=>{
                    setToggle(false)
                    freq("yearly")
                }                    
                } />:
                <BiSolidToggleRight className='text-3xl' onClick={()=>{
                    setToggle(true)
                    freq("monthly")
                }} />
            }
            <span className={!Toggle?' bg-white cursor-pointer p-1 px-4 rounded-full':'p-1 px-4 cursor-pointer'} onClick={()=>setToggle(false)}>Yearly</span>
        </div>
    </div>
  )
}

export default two
