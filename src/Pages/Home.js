import React from "react";
import Logout from "./Logout";
import { motion } from "framer-motion";
import { IoIosAddCircle } from "react-icons/io";
import Card from "../components/Card";
import notesStore from "../stores/notesStore";
import Blob from "../components/Blob";
import { useDisclosure } from "@chakra-ui/react";
import CustomModal from "../components/Modal/CustomModal";
const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const store = notesStore();
  console.log(store.notes);
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
      className="h-screen flex items-center justify-center p-20 "
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <Blob />

      <div className=" z-10 px-10 w-full h-full py-10 border-t-2 border-l-2 border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
        <div className="flex flex-row justify-between">
          <button onClick={onOpen} className="flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:text-blue-500 hover:scale-125">
            <IoIosAddCircle className="text-6xl" />
          </button>
          <Logout />
        </div>

        <div className="mx-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 font-mont">
          {store.notes.length!==0 &&
            store.notes.map((note) => {
              return <Card title={note.title} body={note.body} />;
            })}
          <Card />
        </div>
      </div>
      <CustomModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </motion.div>
  );
};

export default Home;
