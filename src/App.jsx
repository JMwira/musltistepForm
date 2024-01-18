import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from "./steps/one"
import Two from "./steps/two"
import Three from "./steps/three"
import Four from "./steps/four"
import Five from "./steps/Five"
import {IoIosWarning} from "react-icons/io"


function App() {
  const [Message, setMessage] = useState("")
  const [Step, setStep] = useState(1)
  const [FormData, setFormData] = useState(
  {
    name:"",
    email:"",
    phone:"",
    plan:"arcade",
    price:"",
    frequency:"monthly",
    add:{
      title:"online-service",
      price:10
    },
  }
  )

  const handleText = (e)=>{
    let {name,value} = e.target
    setFormData(
      (prevFormData) => ({
        ...prevFormData, 
        [name]: value 
      })
    );
  }
  const choosePlan = (plan,)=>{
    // const {id, value} = e.target
    setFormData(
      (prevFormData)=>({
        ...prevFormData,
        plan
      })
    )
  }
  const chooseFrequency = (frequency)=>{
    setFormData(
      (prevFormData)=>({
        ...prevFormData,
        frequency
      })
    )
  }
  const pickAddOn = (add)=>{
    setFormData(
      (prevFormData)=>({
        ...prevFormData,
        add
      })
    )
  }
  const Next = ()=>{
    if(FormData.name.length!==0||FormData.email.length!==0||FormData.phone.length!==0){
      setStep(Step+1)
    } else{
      setMessage("make sure you fill in all the fields")
    }
  }

  return (
    <div className='flex w-full bg-pale_blue lg:h-screen h-full p-4 justify-center items-center' >
      <div className='flex lg:flex-row flex-col lg:w-[60%] w-full h-[75%] p-4 bg-white rounded-md' >
        <div className='flex flex-col lg:w-1/3 w-full min-h-full p-5 bg-desk bg-bottom bg-cover rounded-none lg:rounded-md' >
          <ul className='flex h-[100%] w-full flex-col gap-4' >
            <li className='text-white flex flex-row items-center gap-3 ' >
              <div className={Step==1?'size-10 rounded-full bg-pale_blue text-quater flex justify-center items-center font-bold':'size-10 rounded-full border-2 text-white flex justify-center items-center font-bold'} >
                <span>1</span>
              </div>
              <div className='uppercase text-white flex flex-col gap-0' >
                <span>Step 1</span>
                <span className='font-bold' >Your info</span>
              </div>
            </li>

            
            <li className='text-white flex flex-row items-center gap-3 ' >
            <div className={Step==2?'size-10 rounded-full bg-pale_blue text-quater flex justify-center items-center font-bold':'size-10 rounded-full border-2 text-white flex justify-center items-center font-bold'} >
                <span>2</span>
              </div>
              <div className='uppercase text-white flex flex-col gap-0' >
                <span>Step 2</span>
                <span className='font-bold' >Select a plan</span>
              </div>
            </li>

            
            <li className='text-white flex flex-row items-center gap-3 ' >
            <div className={Step==3?'size-10 rounded-full bg-pale_blue text-quater flex justify-center items-center font-bold':'size-10 rounded-full border-2 text-white flex justify-center items-center font-bold'} >
                <span>3</span>
              </div>
              <div className='uppercase text-white flex flex-col gap-0' >
                <span>Step 3</span>
                <span className='font-bold' >add-ons</span>
              </div>
            </li>

            
            <li className='text-white flex flex-row items-center gap-3 ' >
            <div className={Step==4||Step==5?'size-10 rounded-full bg-pale_blue text-quater flex justify-center items-center font-bold':'size-10 rounded-full border-2 text-white flex justify-center items-center font-bold'} >
                <span>4</span>
              </div>
              <div className='uppercase text-white flex flex-col gap-0' >
                <span>Step 4</span>
                <span className='font-bold' >Summary</span>
              </div>
            </li>
          </ul>
        </div>

        <div className='flex h-full lg:w-2/3 py-5 bg-white bg-opacity-0 justify-center items-center '>
          <div className={Step==5?'flex lg:w-[80%] w-[95%] justify-center h-[90%] mx-auto flex-col ':'flex lg:w-[80%] w-[95%] justify-between h-[90%] mx-auto flex-col '} >
            <div className='flex w-[100%] mx-auto flex-col ' >
              {
                Step==1?
                <One data = {FormData} action = {handleText} />:
                Step==2?
                <Two data={FormData} action = {choosePlan} freq = {chooseFrequency} />:
                Step==3?
                <Three data={FormData}  action = {pickAddOn} />:
                Step==5?
                <Five/>
                :
                <Four data = {FormData}/>
              }
            </div>
            {
              Message!==""&&
              <span className='flex gap-2 font-bold text-red-500 mt-2 pb-2 items-center' >
                <IoIosWarning/>
                {Message}
              </span>
            }
            <div className='w-full flex flex-row justify-between '>
              {
                Step!==1&&
                <button onClick={()=>setStep(Step-1)} className='w-fit p-3 text-gradient_2 px-0 mt-14 text-left font-bold rounded-md' >
                  Go back
                </button>
              }
              <span></span>
              {
                Step>3&&Step!==5?
                <button onClick={()=>setStep(Step+1)} className='w-fit p-3 bg-gradient_2 px-6 mt-14 text-white rounded-md self-end' >
                  Confirm
                </button>
                :
                Step==5?
                <span></span>:
                <button onClick={()=>Next()} className='w-fit p-3 bg-gradient_2 px-6 mt-14 text-white rounded-md self-end' >
                  Next Step
                </button>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
