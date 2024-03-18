import { Stars, useHelper } from '@react-three/drei';
import React, { useRef } from 'react'
import { DirectionalLightHelper, TextureLoader } from 'three';
// src\assets\earth.jpg
import earth from '../earth/earth.jpg';
import cloud from '../earth/8k_earth_clouds.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {

    const ligthRef = useRef();
    const sphereRef = useRef();
    
    
    useHelper(ligthRef, THREE.PointLightHelper,0.2,"white");

    const [colorMap , cloudMap] = useLoader(TextureLoader,[earth,cloud]);

    useFrame(({state, delta, clock})=>{
        const elapsedTime = clock.getElapsedTime();
        sphereRef.current.rotation.y = elapsedTime/6;
        // sphereRef.current.rotation.y += delta;
        // console.log(de/lta)
        console.log(clock)
    })

  return (
    <>
        {/* <ambientLight intensity={0.04}/> */}
        {/* <directionalLight position={[1,1,2]}
                        intensity={1} 
                        ref={ligthRef}
                        /> */}
        <pointLight color={"#f6f3ea"} 
                    position={[1,0.4,1]} 
                     
                    intensity={1.8}
                    ref={ligthRef}
                    />
        <Stars 
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
             />

         <group ref={sphereRef}>
         <mesh >
            <sphereGeometry  args={[2.004,32,32]}/>
            <meshToonMaterial cloudMap={cloudMap}
                opacity={0.2}
                depthWrite={true}
                transparent={true}
                side={THREE.DoubleSide}
             />
    
              
        </mesh>

        <mesh >
            <sphereGeometry  args={[2,32,32]} />
            <meshToonMaterial map={colorMap} />
            
            <OrbitControls 
                enableZoom={false}
                // enablePan={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                
                />
        </mesh>
         </group>    
        
    </>
  )
}

export default Earth;