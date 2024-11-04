import React from 'react'
import Character from '../assets/components/Character'
import { FaUser, FaCalendarDay, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const About = () => {
  return (
    <div id='about' className=' relative h-screen w-screen overflow-hidden p-10'>
      <h1 className=' w-full titleText'>More about me: my skills, my journey, and the knowledge I'm still pursuing</h1>
      <div className=" flex w-full h-full gap-[5%]">
        <div className=" rounded-xl w-[25%] h-[80%] cardBg cursor-pointer my-10">
          <Character />
        </div>
        <div className=" w-[70%] p-10">
          <div className=" w-full flex gap-[5%]">
            <div className=" cardBg rounded-md secondTextColor w-[40%] p-5 flex flex-col gap-5">
              <p className=' flex items-center gap-2'><FaUser color='#41d1ff' size={22} className='iconShadow' /><span className=' text-white font-semibold'>Name : </span>Khaing Wut Yi Win</p>
              <p className=' flex items-center gap-2'><FaCalendarDay color='#f9d875' className='iconShadow2' size={22} /><span className=' text-white font-semibold'>Birth Date : </span>17 . 12 . 2001</p>
              <p className=' flex items-center gap-2'><FaHome color='#493d83' className='iconShadow3' size={22} /><span className=' text-white font-semibold'>Home : </span>Yangon City, Myanmar</p>
              <p className=' flex items-center gap-2'><FaPhoneAlt color='#3b7299' className='iconShadow4' size={22} /><span className=' text-white font-semibold'>Phone : </span>38478348348</p>
              <p className=' flex items-center gap-2'><FaEnvelope color='#176736' className='iconShadow5' size={22} /><span className=' text-white font-semibold'>Email : </span>blahblahblah@gmail.com</p>
            </div>
            <div className="cardBg w-[55%]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About