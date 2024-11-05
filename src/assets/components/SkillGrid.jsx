import React from 'react'
import { FaReact, FaVuejs, FaAngular, FaNodeJs } from "react-icons/fa";

const SkillGrid = () => {
    const icons = [
        { id: 1, Icon: FaReact, color: "text-blue-400" },
        { id: 2, Icon: FaVuejs, color: "text-green-500" },
        { id: 3, Icon: FaAngular, color: "text-red-600" },
        { id: 4, Icon: FaNodeJs, color: "text-green-400" },
        // Add more icons and colors as needed
    ];

    return (
        <div className="">
            <div className="grid grid-cols-5 gap-6 max-w-4xl mx-auto">
                {icons.map(({ id, Icon, color }) => (
                    <div
                        key={id}
                        className="bg-gray-800 rounded-lg p-6 flex items-center justify-center hover:bg-gray-700 transition duration-300 shadow-lg"
                    >
                        <Icon className={`${color} text-3xl`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillGrid