import React from 'react'
import Character from '../assets/components/Character'
import { FaUser, FaCalendarDay, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Roadmap from '../assets/components/Roadmap';
import SkillGrid from '../assets/components/SkillGrid';


const About = () => {
  return (
    <div id='about' className=' relative min-h-screen max-w-screen p-10'>
      <h1 className=' w-full titleText'>More about me: my skills, my journey, and the knowledge I'm still pursuing</h1>
      <div className=" flex w-full h-full gap-[2%] items-center justify-center">
        <div className=" rounded-xl w-[25%] h-[85%] cardBg cursor-pointer">
          <Character />
        </div>
        <div className=" w-[70%] p-10">
          <div className=" w-full flex gap-[5%]">
            <div className=' w-[40%] flex flex-col gap-14'>
              {/* INFORMATION PART  */}
              <div className=" cardBg rounded-md secondTextColor w-full p-5 flex flex-col gap-5 h-fit">
                <h1 className=' font-semibold text-xl text-[#fefefe]'>Quick Introduction</h1>
                <p className=' flex items-center gap-2'><FaUser color='#41d1ff' size={22} className='iconShadow' /><span className=' text-white font-semibold'>Name : </span>Khaing Wut Yi Win</p>
                <p className=' flex items-center gap-2'><FaCalendarDay color='#f9d875' className='iconShadow2' size={22} /><span className=' text-white font-semibold'>Birth Date : </span>17 . 12 . 2001</p>
                <p className=' flex items-center gap-2'><FaHome color='#493d83' className='iconShadow3' size={22} /><span className=' text-white font-semibold'>Home : </span>Yangon City, Myanmar</p>
                <p className=' flex items-center gap-2'><FaPhoneAlt color='#3b7299' className='iconShadow4' size={22} /><span className=' text-white font-semibold'>Phone : </span>38478348348</p>
                <p className=' flex items-center gap-2'><FaEnvelope color='#176736' className='iconShadow5' size={22} /><span className=' text-white font-semibold'>Email : </span>blahblahblah@gmail.com</p>
              </div>
              <div className=" cardBg w-full rounded-md h-full p-5">
                <h1 className=' font-semibold text-xl text-[#fefefe] mb-5'>My Technical Abilities</h1>
                <SkillGrid />
              </div>
            </div>
            {/* ROADMAP PART  */}
            <div className="cardBg w-[55%] h-full px-10 py-7 flex flex-col gap-5 items-start justify-start">
              <h1 className=' font-semibold text-xl text-[#fefefe] mb-5 -ms-4'>Route to Achievement</h1>
              <Roadmap />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About