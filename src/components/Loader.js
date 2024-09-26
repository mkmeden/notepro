import React from "react";
import { Slab } from "react-loading-indicators";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Slab color="#83e6f1" size="large" text="" textColor="" />
    </div>
  );
};

export default Loader;
