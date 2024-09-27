import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import notesStore from "../stores/notesStore";
import UpdateModal from "./Modal/UpdateModal";
const Card = ({ note }) => {

  const trimText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const {
    isOpen: isSecondModalOpen,
    onOpen: onSecondModalOpen,
    onClose: onSecondModalClose,
  } = useDisclosure();


    const store = notesStore()

  const newBody = trimText(note.body, 30);
  return (
    <div className="  flex flex-col justify-between z-10 px-6 w-72 h-72 py-5 border-t-2 border-l-2 border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:scale-95 duration-300 ease-in-out transition-transform">
      <div className="flex flex-col ">
        <h1 className="text-2xl font-bold text-left">{note.title}</h1>
        <p className="text-left mt-2">{newBody}</p>
      </div>
      <div className="w-full flex justify-between">
        <button
          className="text-3xl"
          onClick={() => {
            onSecondModalOpen();
            store.toggleUpdate(note);
          }}
        >
          <MdEdit />
        </button>
        <button className="text-3xl" onClick={()=>store.deleteNote(note._id)}>
          <MdDelete />
        </button>
      </div>
      <UpdateModal
        isOpen={isSecondModalOpen}
        onOpen={onSecondModalOpen}
        onClose={onSecondModalClose}
      />
    </div>
  );
};

export default Card;
