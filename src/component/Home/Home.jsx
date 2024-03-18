import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Earth from '../earth/Earth'
import Header from '../topSection/Header'

const Home = () => {
  return (
    <>
        <div className=' w-full h-screen bg-black'>
            <Header />
            <Canvas>
                <Suspense fallback={null}>
                   <Earth/> 
                </Suspense>
            </Canvas>
        </div>
    </>
  )
}

export default Home