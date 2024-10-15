import React from "react";
import { Link } from "react-router-dom";

const SigmaWebDev = () => {
  const video = [
    { id: 111, name: "video #110", isDone: true, href: "video110" },
    { id: 111, name: "video #111", isDone: true, href: "video111" },
    { id: 112, name: "video #112", isDone: true, href: "video112" },
    { id: 113, name: "video #113", isDone: false, href: "video113" },
    { id: 114, name: "video #114", isDone: false, href: "video114" },
    { id: 115, name: "video #115", isDone: false, href: "video115" },
    { id: 116, name: "video #116", isDone: false, href: "video116" },
    { id: 117, name: "video #117", isDone: false, href: "video117" },
    { id: 118, name: "video #118", isDone: false, href: "video118" },
    { id: 119, name: "video #119", isDone: false, href: "video119" },
    { id: 121, name: "video #121", isDone: false, href: "video121" },
    { id: 122, name: "video #122", isDone: false, href: "video122" },
  ];
  return (
    <div className="container m-auto p-16">
      <h1 className=" py-6 text-center text-4xl font-bold ">
        Sigma Batch Web-Development
      </h1>

      <ul className="mx-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {video.map((item) => (
          <Link key={item.id} to={item.href}>
            <li className="p-3 border-2 rounded-lg bg-gray-300">
              <i
                className={`bi ${
                  item.isDone
                    ? "bi-check-circle-fill text-green-500"
                    : "bi-x-circle-fill text-red-500"
                } px-3 `}
              ></i>{" "}
              {item.name}{" "}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SigmaWebDev;
