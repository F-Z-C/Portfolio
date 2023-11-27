// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import {Bird, Stump, OrangeMushroom, Slime, HornyMushroom, Thief} from "./canvas";
// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// const Hero = () => {
//   const [expanded, setExpanded] = useState(false);
//   const toggleSection = () => {
//     setExpanded(!expanded);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", toggleSection);
//     return () => {
//       window.removeEventListener("resize", toggleSection);
//     };
//   }, []);

//   return (
//     <section
//       className={`relative w-full h-screen m  ${
//         expanded ? "expanded" : ""
//       }`}
//     >
//         <div className=" h-[300px] mx-auto ">
//           <Canvas className="">
//             <Bird />
//           </Canvas>
//         </div>

//   <div className="h-30 absolute bottom-0 left-1/2 transform -translate-x-1/2">
//   <Canvas className="">
//     <OrangeMushroom />
//     <HornyMushroom />
//     <Slime />
//     <Stump />
//   </Canvas>
// </div>

//     </section>
//   );
// };
// export default Hero;


import { motion } from "framer-motion";
import { styles } from "../styles";
import { Bird, Stump, OrangeMushroom, Slime, HornyMushroom, Thief } from "./canvas";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleSection = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    window.addEventListener("resize", toggleSection);
    return () => {
      window.removeEventListener("resize", toggleSection);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen m ${expanded ? "expanded" : ""}`}>
    <div className=" absolute top-40 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/3 ">
        <Canvas className="">
          <Bird />
        </Canvas>
      </div>

  <div className=" h-36 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 md:w-2/4 lg:w-1/2 xl:w-1/3">
  <Canvas className="w-full">
    <OrangeMushroom />
    <HornyMushroom />
    <Slime />
    <Stump />
  </Canvas>
</div>
    </section>
  );
};

export default Hero;