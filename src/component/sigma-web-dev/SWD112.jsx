import React, { useState } from "react";

const SWD112 = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    repassword: "",
    terms: "",
  });

  const handleForm = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const showUser = () => {
    console.log(user);
    alert(JSON.stringify(user));
  };
  return (
    <>
      <div
        className="bg-gray-900 text-white"
        style={{ width: "100%", height: "calc(100vh - 64px" }}
      >
        <div className="container m-auto">
          <h1 className="my-2 px-4 py-2 bg-white inline-block text-gray-900 text-xl font-bold rounded-lg ">
            #video-112
          </h1>
          <div className=" flex flex-col justify-center items-center ">
            <h1 className="py-8 text-5xl font-bold">Register your self </h1>
            <form
              action=""
              className="w-2/3 p-3 m-auto my-6 text-xl text-black  grid lg:grid-cols-2 gap-4"
            >
              <label htmlFor="" className="p-1 border bg-white rounded-lg">
                Fname
                <input
                  type="text"
                  name="fname"
                  value={user.fname}
                  className="block w-full h-8"
                  onChange={handleForm}
                  required
                />
              </label>
              <label htmlFor="" className="p-1 border bg-white rounded-lg">
                Lname
                <input
                  type="text"
                  name="lname"
                  value={user.lname}
                  className="block w-full h-8"
                  onChange={handleForm}
                  required
                />
              </label>
              <label htmlFor="" className="p-1 border bg-white rounded-lg">
                Email
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="block w-full h-8"
                  onChange={handleForm}
                  required
                />
              </label>
              <label htmlFor="" className="p-1 border bg-white rounded-lg">
                Phone
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  className="block w-full h-8"
                  onChange={handleForm}
                  required
                />
              </label>
              {/* <label htmlFor="">Date of Birth</label>
              <input
                type="date"
                name="dob"
                id=""
                value={user.dob}
                onChange={handleForm}
                required
              /> */}
              {/* <label htmlFor="">Gender</label>
              <input type="text" name="" id=""  /> */}
              {/* <label htmlFor="">Username</label>
              <input
                type="text"
                name="username"
                id=""
                value={user.username}
                onChange={handleForm}
                required
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                id=""
                value={user.password}
                onChange={handleForm}
                required
              />
              <label htmlFor="">Re-Password</label>
              <input
                type="password"
                name="repassword"
                id=""
                value={user.repassword}
                onChange={handleForm}
                required
              />
              <input type="checkbox" name="" id="" />
              <label htmlFor="">I accept terms & conditions.</label> */}
              <button
                className="my-6 px-4 py-2 bg-white inline-block text-gray-900 text-xl font-bold rounded-lg col-span-2"
                onClick={showUser}
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SWD112;
