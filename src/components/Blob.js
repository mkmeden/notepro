import React from 'react'
import { motion } from "framer-motion";

const Blob = () => {
  return (
    <div className=" absolute  flex flex-row justify-center items-center">
            <motion.div
            
        className=" absolute -bottom-96 -left-80 w-60 h-60 shadow-[0_0_20px_10px_rgba(99,192,221,0.25)] m-10"
        initial={{
          background: "linear-gradient(to top right, #D6FFFE, #8DC2FF)",
        }}
        animate={{

          scale: [1, 1.2, 0.9],
          rotate: [0, 15, -15, 0],
          borderTopLeftRadius: ["50%", "50%", "35%", "50%"], // Wobbling border-radius
          borderBottomLeftRadius: ["50%", "35%", "35%", "50%"], // Wobbling border-radius
          borderTopRightRadius: ["50%", "50%", "50%", "50%"], // Wobbling border-radius
          borderBottomRightRadius: ["50%", "35%", "35%", "50%"], // Wobbling border-radius
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

        <motion.div
          className="w-60 h-60 absolute -top-96 -right-80 shadow-[0_0_20px_10px_rgba(255,182,193,0.6)] m-10"
          initial={{
            background: "linear-gradient(to top right, #FFE4FE, #FF95CF)",
          }}
          animate={{

            scale: [1, 1.2, 0.8],
            rotate: [0, 15, -15, 0],
            borderTopLeftRadius: ["40%", "50%", "55%", "30%"], // Wobbling border-radius
            borderBottomLeftRadius: ["30%", "45%", "55%", "40%"], // Wobbling border-radius
            borderTopRightRadius: ["50%", "30%", "50%", "40%"], // Wobbling border-radius
            borderBottomRightRadius: ["40%", "35%", "35%", "30%"], // Wobbling border-radius
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
    </div>
  )
}

export default Blob
