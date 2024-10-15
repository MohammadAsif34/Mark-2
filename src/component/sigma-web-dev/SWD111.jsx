import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SWD111 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
        console.log(data.id);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // alert(data.length == 0 && "Data not Fetching. something error!!");
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="container m-auto">
          <h1 className="my-2 px-4 py-2 bg-white inline-block text-gray-900 text-xl font-bold rounded-lg ">
            #video-111
          </h1>
          <div>
            <h1 className="text-xl py-3">
              <span className="text-2xl">Que :</span> Display the data in the
              form of card under a container using APIs. APIs:{" "}
              <Link to={"https://jsonplaceholder.typicode.com/posts"}>
                https://jsonplaceholder.typicode.com/posts
              </Link>
            </h1>
          </div>
        </div>
        {data.length !== 0 ? (
          <div className="container m-auto">
            <div className="w-full p-5 bg-gray-900 text-black rounded-lg grid xl:grid-cols-2 gap-5 first-letter:bg-red-500">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="bg-white shadow-lg p-5 rounded-lg flex"
                >
                  <div className="text-xl font-semibold flex ">
                    <div className="px-3">
                      <h1>Id</h1>
                      <h1>Title</h1>
                      <h1>UserId</h1>
                      <h1>Description</h1>
                    </div>
                    <div className="flex flex-col">
                      <span>:</span>
                      <span>:</span>
                      <span>:</span>
                      <span>:</span>
                    </div>
                    <div className="px-3 font-normal">
                      <p>{item.id}</p>
                      <p>{item.userId}</p>
                      <p className="first-letter:uppercase">{item.title}</p>
                      <p className="first-letter:uppercase">{item.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </div>
        ) : (
          <div className="container m-auto">
            <h1 className="my-12 text-center text-xl font-bold">
              Data not Fetched. <br />{" "}
              <span className="text-red-500 normal-case font-light">
                something error!!
              </span>
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default SWD111;
