import React from "react";
import { useParams } from "react-router-dom";

const SWD115 = () => {
  const params = useParams();
  return (
    <>
      <div
        className=" bg-gray-900 text-white"
        style={{ width: "100%", height: "calc(100vh - 64px" }}
      >
        <div className="container m-auto">
          <div>
            <h1 className="my-2 px-4 py-2 bg-white inline-block text-gray-900 text-xl font-bold rounded-lg ">
              #video-110
            </h1>
          </div>
          <div className="text-center text-xl">
            {" "}
            Hii, i am {params.username ? params.username : "--"}
          </div>
        </div>
      </div>
    </>
  );
};

export default SWD115;
