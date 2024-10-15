import React from "react";
import { Link } from "react-router-dom";

const SWD110 = () => {
  return (
    <>
      <div
        className=" bg-gray-900 text-white"
        style={{ width: "100%", height: "calc(100vh - 64px" }}
      >
        <div className="container m-auto">
          <div>
            <Link to="/">
              <span className="my-2 px-4 py-2  inline-block bg-green-600 text-xl font-bold rounded-lg ">
                <i className="bi bi-arrow-left-circle-fill pr-4"></i>
                #video-109
              </span>
            </Link>
            <Link to="video111">
              <span className="my-2 px-4 py-2  inline-block bg-green-600 text-xl font-bold rounded-lg float-end">
                #video-111
                <i className="bi bi-arrow-right-circle-fill pl-4"></i>
              </span>
            </Link>
          </div>
          <h1 className="my-2 px-4 py-2 inline-block  text-xl font-bold rounded-lg underline">
            #video-110
          </h1>
        </div>
      </div>
    </>
  );
};

export default SWD110;
