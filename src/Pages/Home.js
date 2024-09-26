import React from "react";
import Logout from "./Logout";
import { motion } from "framer-motion";
import { IoIosAddCircle } from "react-icons/io";
import Card from "../components/Card";
import notesStore from "../stores/notesStore";
import Blob from "../components/Blob";
import { useDisclosure } from "@chakra-ui/react";
import CustomModal from "../components/Modal/CustomModal";
import UpdateModal from "../components/Modal/UpdateModal";
import authStore from "../stores/authStore";
const Home = () => {


  const {
    isOpen: isFirstModalOpen,
    onOpen: onFirstModalOpen,
    onClose: onFirstModalClose,
  } = useDisclosure();

  const {
    isOpen: isSecondModalOpen,
    onOpen: onSecondModalOpen,
    onClose: onSecondModalClose,
  } = useDisclosure();

  const store = notesStore();
  console.log("notes", store.notes.length);
  const AuthStore=  authStore();

  
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
          <button
            onClick={onFirstModalOpen}
            className="flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:text-blue-500 hover:scale-125"
          >
            <IoIosAddCircle className="text-6xl" />
          </button>
          <h1 className="font-bold  text-2xl font-mont">{`Welcome ${AuthStore.name}`}</h1>
          <Logout />
        </div>

        <div className="mx-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 font-mont h-[70vh] overflow-y-auto">
          {store.notes.length == 0 ? (
            <motion.h1
              animate={{
                scale: [1, 1.05],
              }}
              transition={{
                duration: 0.35,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              Press on the plus icon to create a note
            </motion.h1>
          ) : (
            store.notes.map((note) => (
              <button
              className="flex items-center justify-center"
                onClick={() => {
                  onSecondModalOpen();
                  store.toggleUpdate(note);
                }}
              >
                <Card title={note.title} body={note.body} />
              </button>
            ))
          )}
        </div>
      </div>
      <CustomModal
        isOpen={isFirstModalOpen}
        onOpen={onFirstModalOpen}
        onClose={onFirstModalClose}
      />
      <UpdateModal
        isOpen={isSecondModalOpen}
        onOpen={onSecondModalOpen}
        onClose={onSecondModalClose}
      />
    </motion.div>
  );
};

export default Home;
