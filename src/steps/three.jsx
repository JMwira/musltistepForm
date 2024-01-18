import React, { useState } from 'react'

const three = ({action, data}) => {
    const [Option, setOption] = useState(
        {
            name:data.add.title,
            id:Math.random()
        }
    )

    const chosenOption = (i)=>{
        action(i)
        setOption({
            name:i
        })
    }
  return (
    <div className='flex w-full flex-col' >
        <span className='text-3xl font-extrabold' >Pick add-ons</span>
        <span className='text-slate-400 font-semibold' >
            Add-ons help enhance your gaming experience
        </span>

        <div className='mt-5 flex flex-col gap-4 font-semibold ' >
            <div onClick={()=>chosenOption('online-service')} className={Option.name=='online-service'?' bg-slate-200 p-3 border-[1px] rounded-md border-slate-400 flex flex-row gap-4 justify-between items-center ':'p-3 border-[1px] rounded-md border-slate-400 flex flex-row gap-4 justify-between items-center '} >
                <div className='flex flex-row items-center gap-4' >
                    <input onChange={()=>{}} checked={Option.name=='online-service'&&true} type="checkbox" className='size-5' />
                    <div className='flex flex-col gap-0' >
                        <span className='font-bold' >Online service</span>
                        <span className='font-light text-slate-400' >Access to multiplayer games</span>
                    </div>
                </div>
                <div className='flex' >
                    <span className='text-gradient_1' >+1$/mo</span>
                </div>
            </div>
            <div onClick={()=>chosenOption('larger-storage')} className={Option.name=='larger-storage'?' bg-slate-200 p-3 border-[1px] rounded-md border-slate-400 flex flex-row gap-4 justify-between items-center ':'p-3 border-[1px] rounded-md border-slate-400 flex flex-row gap-4 justify-between items-center '} >
                <div className='flex flex-row items-center gap-4' >
                    <input onChange={()=>{}} checked={Option.name=='larger-storage'&&true} type="checkbox" className='size-5' />
                    <div className='flex flex-col gap-0' >
                        <span className='font-bold' >Larger storage</span>
                        <span className='font-light text-slate-400' >Extra 1 TB of cloud save</span>
                    </div>
                </div>
                <div className='flex' >
                    <span className='text-gradient_1' >+2$/mo</span>
                </div>
            </div>
            <div onClick={()=>chosenOption('customizable-service')} className={Option.name=='customizable-service'?' bg-slate-200 p-3 border-[1px] rounded-md border-slate-400 flex flex-row gap-4 justify-between items-center ':'p-3 border-[1px] rounded-md border-slate-400 flex flex-row gap-4 justify-between items-center '} >
                <div className='flex flex-row items-center gap-4' >
                    <input onChange={()=>{}} checked={Option.name=='customizable-service'&&true} type="checkbox" className='size-5' />
                    <div className='flex flex-col gap-0' >
                        <span className='font-bold' >Customizable service</span>
                        <span className='font-light text-slate-400' >Custom theme on your profile</span>
                    </div>
                </div>
                <div className='flex' >
                    <span className='text-gradient_1' >+1$/mo</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default three
