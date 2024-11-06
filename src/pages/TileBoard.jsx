import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import '../assets/css/tileBoard.css'; // Import the custom CSS
import { IoArrowDownCircleSharp } from "react-icons/io5";


const ROWS = 6;
const COLS = 6;
const BLOCK_SIZE = 50;

const TileBoard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const boardRef = useRef(null);
    const blocksWrapperRef = useRef(null);
    const [numCols, setNumCols] = useState(0);
    const [numRows, setNumRows] = useState(0);

    useEffect(() => {
        if (blocksWrapperRef.current) {
            createBlocks();
        }
        initializeTileAnimation();
        document.addEventListener("mousemove", highlightBlock);

        return () => {
            document.removeEventListener("mousemove", highlightBlock);
        };
    }, []);

    const createTiles = (row, col) => {
        const bgPosition = `${col * 20}% ${row * 20}%`;

        return (
            <div className="tile" key={`${row}-${col}`}>
                <div className="tile-face tile-front" style={{ backgroundPosition: bgPosition }}></div>
                <div className="tile-face tile-back" style={{ backgroundPosition: bgPosition }}></div>
            </div>
        );
    };

    const createBoard = () => {
        return Array.from({ length: ROWS }, (_, i) => (
            <div className="row" key={i}>
                {Array.from({ length: COLS }, (_, j) => createTiles(i, j))}
            </div>
        ));
    };

    const initializeTileAnimation = () => {
        const tiles = document.querySelectorAll(".tile");
        tiles.forEach((tile, index) => {
            tile.addEventListener("mouseenter", () => {
                let tiltY;
                switch (index % 6) {
                    case 0: tiltY = -40; break;
                    case 5: tiltY = 40; break;
                    case 1: tiltY = -20; break;
                    case 4: tiltY = 20; break;
                    case 2: tiltY = -10; break;
                    default: tiltY = 10;
                }
                animateTile(tile, tiltY);
            });
        });
    };

    const animateTile = (tile, tiltY) => {
        gsap.timeline()
            .set(tile, { rotateX: 0, rotateY: 0 })
            .to(tile, {
                rotateX: 180,
                rotateY: tiltY,
                duration: 0.5,
                ease: "power2.out",
            })
            .to(tile, {
                rotateX: 360,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out",
            }, "-=0.25");
    };

    const flipAllTiles = () => {
        setIsFlipped((prevFlipped) => {
            const newFlipped = !prevFlipped;
            const tiles = document.querySelectorAll(".tile");

            gsap.to(tiles, {
                rotateX: newFlipped ? 180 : 0,
                duration: 1,
                stagger: {
                    amount: 0.5,
                    from: "random",
                },
                ease: "power2.inOut",
            });

            return newFlipped;
        });
    };


    const createBlocks = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const numCols = Math.ceil(screenWidth / BLOCK_SIZE);
        const numRows = Math.ceil(screenHeight / BLOCK_SIZE);
        setNumCols(numCols);
        setNumRows(numRows);
    };

    const highlightBlock = (event) => {
        if (!blocksWrapperRef.current) return;

        const blockContainer = blocksWrapperRef.current;
        const rect = blockContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const col = Math.floor(x / BLOCK_SIZE);
        const row = Math.floor(y / BLOCK_SIZE);
        const index = row * numCols + col;
        const block = blockContainer.children[index];
        if (block) {
            block.classList.add("highlight");
            setTimeout(() => {
                block.classList.remove("highlight");
            }, 250);
        }
    };

    return (
        <div className=' relative max-h-screen max-w-screen overflow-hidden'>
            <nav className='absolute top-0 left-0'>
                <a href="#">Oro Wee</a>
                <button id="flipButton" onClick={flipAllTiles}>Flip Tiles</button>
            </nav>
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <p className="mainText">
                    Hello! I'm
                    <span className="text-blue-500 font-bold"> Khaing Wut Yi Win </span>,
                    a frontend developer with a passion for building clean, responsive, and user-focused web experiences.
                    With skills in React, GSAP, and CSS, I specialize in turning creative ideas into seamless digital solutions.
                    Take a look at my work below, and let’s connect if you're interested in collaborating!
                </p>

            </div>

            <div id="board" ref={boardRef}>
                {createBoard()}
            </div>
            <div id="blocksWrapper" ref={blocksWrapperRef} style={{ display: "grid", gridTemplateColumns: `repeat(${numCols}, ${BLOCK_SIZE}px)` }}>
                {Array.from({ length: numCols * numRows }).map((_, index) => (
                    <div className="block" key={index} data-index={index}></div>
                ))}
            </div>
            <a href="#about">
                <button className=" absolute bottom-5 right-[48%] translate-x-1/2 -rotate-90 z-50 animate-bounce">
                    <IoArrowDownCircleSharp size={40} color='#06D6A0' />
                </button>
            </a>
        </div>
    );
};

export default TileBoard;
