import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Experience } from './Experience'

const Character = () => {
    return (
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
        </Canvas>
    )
}

export default Character