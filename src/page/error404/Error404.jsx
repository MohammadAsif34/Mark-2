import React from "react";
import error404 from "/error404.gif";

const Error404 = () => {
  return (
    <div
      className="bg-gray-900 flex justify-start items-center flex-col text-white"
      style={{ width: "100%", height: "100vh" }}
    >
      <img
        src={error404}
        alt=""
        className="scale-150  sm:w-60 lg:w-96"
        // style={{ width: "600px", height: "300px" }}
      />
      <h1 className=" py-3 text-4xl text-center font-semibold ">
        404 Page Not Found!
      </h1>
      <h2 className="text-6xl text-center py-3 font-bold">
        Woops! This page is not found.
      </h2>
      <button
        className=" mt-5 px-5 py-2 border bg-green-500 rounded-lg"
        onClick={() => {
          window.history.back();
        }}
      >
        <i className="bi bi-arrow-left-circle-fill pr-3"></i>Go Back
      </button>
    </div>
  );
};

export default Error404;
