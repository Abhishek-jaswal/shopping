import React from "react";

const Preview = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <video src="/assets/model-360.mkv" controls autoPlay loop className="max-w-full max-h-full" />
    </div>
  );
};

export default Preview;
