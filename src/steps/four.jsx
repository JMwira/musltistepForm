import React from 'react'

const four = ({data}) => {
  return (
    <div className='flex w-full flex-col' >
        <span className='text-3xl font-extrabold' >Finishing up</span>
        <span className='text-slate-400 font-semibold' >Double-check everything looks OK before confirming</span>

        <div className='mt-5 bg-slate-100 p-4 rounded-md flex flex-col gap-4 justify-end items-end font-semibold ' >
        <div className='p-3 justify-between border-b-2 flex w-full' >
           <div className='font-bold flex gap-2 uppercase ' >
            {data.plan}
            <span className='lowercase' >({data.frequency})</span>
           </div>
           <div className='font-extrabold' >
            <span>
              {
                data.plan=='arcade'&&
                <span>+$9/mo</span>
              }
            </span>
            <span>
              {
                data.plan=='advanced'&&
                <span>+$12/mo</span>
              }
            </span>
            <span>
              {
                data.plan=='pro'&&
                <span>+$15/mo</span>
              }
            </span>
           </div>
        </div>
          <div className='p-3 border-b-0 font-light flex w-full justify-between' >
              <span>
              {
                data.add.title
              }
              </span>
              <span className='font-bold' >
                +${data.add.price}/yr
              </span>
          </div>
        </div>
        <div className='flex justify-between px-7 py-4' >
          <span className='font-light text-slate-500' >
          Total (per {data.frequency=='monthly'?'Month':'Year'})
          </span>
          {
            data.frequency=='yearly'?
              data.plan=='arcade'?
              <span className='font-extrabold text-gradient_1' >
                +${9*12}/yr
              </span>
              :
              data.plan=='advanced'?
              <span className='font-extrabold text-gradient_1' >
                +${12*12}/yr
              </span>
              :
              <span className='font-extrabold text-gradient_1' >
              +${15*12}/yr
              </span>

            :
            <div className='font-extrabold' >
              <span>
                {
                  data.plan=='arcade'&&
                  <span>+$9/mo</span>
                }
              </span>
              <span>
                {
                  data.plan=='advanced'&&
                  <span>+$12/mo</span>
                }
              </span>
              <span>
                {
                  data.plan=='pro'&&
                  <span>+$15/mo</span>
                }
              </span>
            </div>
          }
        </div>
    </div>
  )
}

export default four
