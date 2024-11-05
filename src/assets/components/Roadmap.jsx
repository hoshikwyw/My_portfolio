import React from 'react'
import { FaTrophy,FaFlag } from "react-icons/fa";


const Roadmap = () => {
    return (
        <div className=''>
            <ol class="relative text-gray-500 border-s-2 border-[#13b351] borderShadow">
                <li class="mb-10 ms-10">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#13b351] ringShadow">
                        <FaTrophy size={20} color='#13b351' />
                    </span>
                    <h3 class="font-medium leading-tight text-white">Special Web Design</h3>
                    <p class="text-sm">Step details here</p>
                </li>
                <li class="mb-10 ms-10">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#13b351] ringShadow">
                        <FaTrophy size={20} color='#13b351' />
                    </span>
                    <h3 class="font-medium leading-tight text-white">Web Application Development</h3>
                    <p class="text-sm">Step details here</p>
                </li>
                <li class="mb-10 ms-10">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#13b351] ringShadow">
                        <FaTrophy size={20} color='#13b351' />
                    </span>
                    <h3 class="font-medium leading-tight text-white">CS50 Computer Science</h3>
                    <p class="text-sm">Step details here</p>
                </li>
                <li class="mb-10 ms-10">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#13b351] ringShadow">
                        <FaTrophy size={20} color='#13b351' />
                    </span>
                    <h3 class="font-medium leading-tight text-white">Frontend Web Developer</h3>
                    <p class="text-sm">Step details here</p>
                </li>
                <li class="mb-10 ms-10">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#242424] ringShadowLearing">
                        <FaFlag  size={20} color='#33a7cd' />
                    </span>
                    <h3 class="font-medium leading-tight text-white">JavaScript Developer</h3>
                    <p class="text-sm">Step details here</p>
                </li>
                <li class="mb-10 ms-10">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#242424] ringShadowLearing">
                        <FaFlag  size={20} color='#33a7cd' />
                    </span>
                    <h3 class="font-medium leading-tight text-white">MERN Stack Development</h3>
                    <p class="text-sm">Step details here</p>
                </li>
                <li class=" mb-10 ms-10">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#242424] ringShadowLearing">
                        <FaFlag  size={20} color='#33a7cd' />
                    </span>
                    <h3 class="font-medium leading-tight text-white">React Native Development</h3>
                    <p class="text-sm">Step details here</p>
                </li>
                <li class="ms-10 flex items-center">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#1e1e1e] rounded-full -start-4 ring-4 ring-[#242424] ringShadowComing">
                        {/* <FaFlag  size={20} color='#33a7cd' /> */}
                    </span>
                    <h3 class="font-medium leading-tight">Soon ....</h3>
                </li>
            </ol>

        </div>
    )
}

export default Roadmap