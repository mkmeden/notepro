import React, { useState } from "react";
import { motion } from "framer-motion";
import Blob from "../components/Blob";
import Signup from "./Signup";
import Login from "./Login";
const ContinuousAnimatedGradient = () => {

    const [login , setLogin] = useState(false)

  return (
    <motion.div
      animate={{
        backgroundImage: [
          "linear-gradient(45deg, #87F8FF,#FFCDCD)", // Initial gradient colors
          "linear-gradient(45deg, #FFCDCD, #87F8FF)", // Rotate colors
          "linear-gradient(45deg, #87F8FF, #FFCDCD)", // Rotate more
          "linear-gradient(45deg, #FFCDCD, #87F8FF)", // Back to initial
        ],
      }}
      transition={{
        duration: 10, // Total duration for the full color rotation
        ease: "linear", // Linear easing for continuous smooth transitions
        repeat: Infinity, // Loop the animation infinitely
        repeatType: "mirror",
      }}
      className="h-screen flex items-center justify-center "
      style={{
          backgroundSize: "100% 100%",
        }}
    >
        <Blob />

        {login ? <Login login = {login} setLogin = {setLogin}/> : <Signup login = {login} setLogin = {setLogin}/>}

    </motion.div>
  );
};

export default ContinuousAnimatedGradient;
