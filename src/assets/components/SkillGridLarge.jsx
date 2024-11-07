import React from 'react'
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap } from "react-icons/fa";
import { SiReactrouter, SiReactquery, SiRedux, SiGreensock, SiTailwindcss } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const SkillGridLarge = () => {
    const icons = [
        { id: 1, color: "#dd4b25" },
        { id: 2, color: "#18669e" },
        { id: 2, color: "#18669e" },
        { id: 3, Icon: FaHtml5, color: "#dd4b25" },
        { id: 4, Icon: FaCss3Alt, color: "#254bdd" },
        { id: 8, Icon: FaJsSquare, color: "#efd81d" },
        { id: 9, Icon: FaBootstrap, color: "#7811f2" },
        { id: 10, Icon: FaReact, color: "#48cef7" },
        { id: 11, Icon: SiReactrouter, color: "#ed404d" },
        { id: 5, color: "#339933" },
        { id: 6, color: "#339933" },
        { id: 7, color: "#339933" },
        { id: 12, color: "#339933" },
        { id: 13, color: "#339933" },
        { id: 13, color: "#339933" },
        { id: 14, Icon: SiReactquery, color: "#f73f51" },
        { id: 15, Icon: SiRedux, color: "#7248b6" },
        { id: 16, Icon: SiGreensock, color: "#8ecd00" },
        { id: 17, Icon: TbBrandThreejs, color: "#339933" },
        { id: 21, Icon: SiTailwindcss, color: "#36b7f0" },
        { id: 22, Icon: FaGitAlt, color: "#e84e31" },
        { id: 19, color: "#339933" },
        { id: 20, color: "#339933" },
        { id: 20, color: "#339933" },
        // Add more icons and colors as needed
    ];

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-12 gap-4 mx-auto skillGridContainer2 p-2">
                {icons.map(({ id, Icon, color }) => (
                    <div
                        key={id}
                        style={{
                            cursor: 'pointer',
                            boxShadow: 'none',
                            transition: 'box-shadow 0.001s ease-in',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 18px ${color}`;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.transition = 'box-shadow 0.4s ease-out';
                        }}
                        className="rounded-lg p-4 flex items-center justify-center cardBg2 transition ease-in-out duration-500 cursor-pointer"
                    >
                        {Icon ? (
                            <Icon
                                color={color}
                                opacity={1}
                                style={{
                                    filter: `drop-shadow(0 0 2px ${color}bb)`,
                                    boxShadow: "none",
                                }}
                                size={38}
                            />
                        ) : (
                            <h1 className='w-[32px] h-[32px]'></h1>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillGridLarge