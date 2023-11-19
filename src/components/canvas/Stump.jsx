
// import { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Stump = () => {
//   const { nodes, materials, animations } = useGLTF("./stump_scene/scene.gltf");
//   const { actions } = useAnimations(animations);
//   // Choose the animation you want to play, e.g., 'Idle'
//   const animationToPlay = 'Armature|Damage';

//   // Play the selected animation
//   useEffect(() => {
//     console.log(actions); // Log available actions
//     const clip = actions[animationToPlay];
//     if (clip) {
//       clip.reset();
//       clip.play();
//     }
//   }, [actions, animationToPlay]);

//   return (
//     <mesh>
//       <primitive object={nodes.Object_6} material={materials.Object_6} 
//       />
//       {/* Add other nodes, materials, or components here */}
//     </mesh>
//   );
// };
// const StumpCanvas = () => {
//   return (
//     <div className=" w-[400px] h-[400px] absolute top-[40px] right-[50px] ">
//       <Canvas frameloop="demand" shadows camera={{ position: [-10, 10, 30,], fov: 10 }} gl={{ preserveDrawingBuffer: true }}>
//         <Suspense fallback={<CanvasLoader />}>
//         <ambientLight intensity={0.35} /> 
//         <directionalLight position={[4, 20, 2]} intensity={3}/>
//         <OrbitControls autoRotateSpeed={1} enableZoom={false}  maxPoLarAngle={Math.PI / 1} minPoLarAngle={Math.PI / 1} />
//           <Stump />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };
// export default StumpCanvas;





// import { Suspense, useEffect, useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// // drei is a utility package for threejs which contains various tools that can be used to enchance threejs
// import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import { geometry } from "maath";


// const Stump = () => {
// const stump = useGLTF("./stump_scene/scene.gltf");
// const { nodes, materials, animations} = useGLTF("./stump_scene/scene.gltf");

//   const { actions } = useAnimations(animations);
//   const animationToPlay = 'Death';

//   useEffect(() => {
//     console.log(animations); // Log available actions
//     const clip = actions[animationToPlay]; // Use animationToPlay to access the desired animation
//     if (clip) {
//       clip.reset();
//       clip.play();
//     }
//   }, [actions, animationToPlay]);


//   return (
//     <group>
//       <primitive object={nodes.Object_6}   />
//       {/* Add other nodes, materials, or components here */}
//     </group>
//   );
// };

//   return (
//     <mesh>
//     <hemisphereLight intensity={0.4} groundColor="black" />
//     <pointLight intensity={1} />
//     <spotLight position={[-60, 50, 10]}
//     angle={1}
//     penumbra={1}
//     intensity={1}
//     castShadow
//     shadow-mapSize={1024} />
//     <primitive 
//     object={stump.scene} 
//     scale= {5}
//     // position={[0, -2, -9]}
//     // rotation={[0, 1.5, 0]}

//     position={[-5, -2, 3]}
//     rotation={[0, 1.5, 0]}
    
//     />
//     </mesh>

// );
// };
 
// const StumpCanvas = () => {
//     return (
//       <div className="h-full">
        
//           <Canvas frameloop="demand"
//           shadows
//           camera={{position: [10, 0.2, 0.2], fov: 100}}
//           gl={{preserveDrawingBuffer: true}}
//           >
//       {/*Fall back component. In this component loading percentage will be displayed when rendering the gltf  */}
//       <Suspense fallback={<CanvasLoader/>} >
  
//  {/* enableZoom is set to flase so users can't zoom in or out on the 3d model.*/}
//       <OrbitControls
//       // autoRotate={true}
//       enableRotate={true}
//       autoRotateSpeed={0.5}
//       enableZoom={false}
//       // PolarAngle is used so users can't rotate the gltf scene freely.
//       // maxPoLarAngle={Math.PI / 10}
//       // minPoLarAngle={Math.PI / 10}
//       />
//       <Stump/>
//       </Suspense>
//       <Preload all />
  
//       </Canvas>
//       </div>
//     );
//   };
//   export default StumpCanvas;
  






import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacterAnimations } from './useCharacterAnimations';
import { OrbitControls, Preload } from "@react-three/drei";

const Stump = () => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./stump_scene/stump_animation_test3.glb',
 

  
  );
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    setAnimations(names);
  }, [names]);

  useEffect(() => {

    console.log("Names:", names);
    actions[names[animationIndex]].reset().fadeIn(1).play('Idle');
    return () => {
      actions[names[animationIndex]].fadeOut(0.5);
    };
  }, [actions, animationIndex]);


  
  return (
    <group ref={group} dispose={null} scale={[1, 1, 1]}>
      <primitive object={nodes.Scene}
       scale= {0.4}
       position={[-0.1, -3, -0.001]} />

      {/* <primitive 
    object={slime.scene} 
    scale= {25}
    position={[-60, -20, -9]}
    rotation={[0, 1.5, 0]}  /> */}

      <ambientLight />
       <hemisphereLight intensity={0} groundColor="orange" />
        <directionalLight position={[1, 1, 1]} castShadow intensity={1} />
      <pointLight intensity={1} />
     <spotLight
          position={[-60, 90, 40]}
          angle={0.7}
          penumbra={1}
          intensity={0.1}
          castShadow
          shadow-mapSize={1024}
        />

<OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.25}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 2.5}
        position={[-1, 0, 0]} // Adjust the camera position here
      />

    </group>
  );
};

export default Stump;

