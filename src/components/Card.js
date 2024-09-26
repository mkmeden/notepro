import React from "react";

const Card = ({title, body}) => {
    console.log(title)

    const trimText = (text, wordLimit) => {
      if (!text) return "";
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
      }
      return text;
    };
    
    const newBody = trimText(body , 30)
  return (
    <div className=" z-10 px-6 w-72 h-72 py-5 border-t-2 border-l-2 border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:scale-95 duration-300 ease-in-out transition-transform">
        <h1 className="text-2xl font-bold text-left">{title}</h1>
        <p className="text-left mt-2">{newBody}</p>
    </div>
  );
};

export default Card;
