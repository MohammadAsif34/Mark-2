import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  const projects = [
    { id: 1, name: "form submission ", href: "form-submission", isDone: true },
    {
      id: 2,
      name: "password validator",
      href: "password-validator",
      isDone: true,
    },
    { id: 3, name: "weather  ", href: "weather", isDone: false },
    { id: 4, name: "ip finder", href: "ip-finder", isDone: true },
    { id: 5, name: "todo app", href: "todo-app", isDone: true },
    { id: 6, name: "joke generator ", href: "joke-generator", isDone: false },
    { id: 7, name: "coin flip", href: "coin-flip", isDone: false },
  ];
  return (
    <section className="container m-auto">
      <div className=" p-5">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((item) => (
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
    </section>
  );
};

export default Project;
