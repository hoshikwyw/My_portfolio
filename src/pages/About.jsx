import React from 'react'
import Character from '../assets/components/Character'
import { FaUser, FaCalendarDay, FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Roadmap from '../assets/components/Roadmap';
import SkillGrid from '../assets/components/SkillGrid';
import SkillGridLarge from '../assets/components/SkillGridLarge';


const About = () => {
  return (
    <div id='about' className=' relative min-h-screen max-w-screen p-10'>
      <h1 className=' w-full titleText my-2'>More about me: my skills, my journey, and the knowledge I'm still pursuing</h1>
      <div className=" flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col w-full h-full gap-[2%] items-center justify-center">
        <div className=" rounded-xl xl:w-[25%] lg:w-[30%] md:w-[100%] sm:w-full xs:w-full xl:h-[700px] lg:h-[700px] md:h-[300px] sm:h-[300px] xs:h-[300px] cardBg cursor-pointer xs:my-10 my-0">
          <Character />
        </div>
        <div className=" xl:w-[70%] lg:w-[70%] w-full m-10 xs:m-0">
          <div className=" w-full flex xl:flex-row lg:flex-col flex-col gap-[20px]">
            <div className=' xl:w-[50%] w-[100%]  flex flex-col gap-10'>
              {/* INFORMATION PART  */}
              <div className=" cardBg rounded-md secondTextColor w-full p-5 flex flex-col gap-5 h-fit">
                <h1 className=' font-semibold text-xl text-[#fefefe]'>Quick Introduction</h1>
                <p className=' flex items-center gap-2'><FaUser color='#41d1ff' size={22} className='iconShadow' /><span className=' text-white font-semibold'>Name : </span>Khaing Wut Yi Win</p>
                <p className=' flex items-center gap-2'><FaCalendarDay color='#f9d875' className='iconShadow2' size={22} /><span className=' text-white font-semibold'>Birth Date : </span>17 . 12 . 2001</p>
                <p className=' flex items-center gap-2'><FaHome color='#493d83' className='iconShadow3' size={22} /><span className=' text-white font-semibold'>Home : </span>Yangon City, Myanmar</p>
                <p className=' flex items-center gap-2'><FaPhoneAlt color='#3b7299' className='iconShadow4' size={22} /><span className=' text-white font-semibold'>Phone : </span>38478348348</p>
                <p className=' flex items-center gap-2'><FaEnvelope color='#176736' className='iconShadow5' size={22} /><span className=' text-white font-semibold'>Email : </span>blahblahblah@gmail.com</p>
              </div>
              {/* SKILL SHOWCASE GRID  */}
              <div className=" skillCardBg w-full rounded-md h-full p-4 xl:block hidden">
                <h1 className=' font-semibold text-xl text-[#fefefe]'>My Technical Abilities</h1>
                <SkillGrid />
              </div>
            </div>
            {/* ROADMAP PART FOR LG AND SMALLER SCREEN  */}
            <div className="cardBg xl:w-[45%] lg:w-full h-full px-10 xs:px-5 py-7 xs:py-3 flex flex-col items-start justify-start">
              <h1 className=' font-semibold text-xl text-[#fefefe] mb-5 xs:mb-0 -ms-4 xs:ms-0'>Route to Achievement</h1>
              <div className=" w-full xl:h-full h-[300px] overflow-scroll p-8 xs:px-6 scrollbar-hide">
                <Roadmap />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SKILL SHOWCASE GRID  */}
      <div className=" skillCardBg w-full rounded-md h-full p-4 block xl:hidden">
        <h1 className=' font-semibold text-xl text-[#fefefe] text-center mb-2'>My Technical Abilities</h1>
        <SkillGridLarge />
      </div>
    </div>
  )
}

export default About