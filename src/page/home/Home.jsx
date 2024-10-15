import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="bg-gradient-to-t"
        style={{ width: "100%", height: "calc(100vh - 70px)" }}
      >
        <main className="container m-auto">
          <header className="bg-blue-600 text-white p-5">
            <div className="flex flex-end">
              <h1 className="text-4xl font-bold flex-1">My Portfolio</h1>
            </div>
            <nav>
              <ul className="flex space-x-6 mt-3">
                <li>
                  <a href="#about" className="hover:underline">
                    <span className="px-6 py-2 bg-gradient-to-t from-pink-500 to-orange-500 rounded-xl">
                      About Me
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:underline">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/cv.pdf" className="hover:underline" download>
                    Download CV
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <section id="about" className="p-6 bg-gray-100">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-2">
              I am a passionate software developer with expertise in building
              high-quality web applications. My focus is on creating efficient,
              scalable, and user-friendly solutions. I enjoy tackling challenges
              and learning new technologies to enhance my skills and deliver
              value to my clients.
            </p>
            <p className="mt-2">
              With a strong foundation in JavaScript, React, and Node.js, I have
              successfully completed various projects that have improved the
              performance and usability of applications.
            </p>
          </section>
          <section id="projects" className="p-6">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div className="border rounded-lg p-4 shadow-lg">
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p>
                  A web application that allows users to track their tasks and
                  manage their time efficiently.
                </p>
                <a
                  href="https://github.com/yourusername/project1"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
              <div className="border rounded-lg p-4 shadow-lg">
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p>
                  An e-commerce platform built with React and Node.js, featuring
                  a user-friendly interface.
                </p>
                <a
                  href="https://github.com/yourusername/project2"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
              <div className="border rounded-lg p-4 shadow-lg">
                <h3 className="text-xl font-semibold">Project 3</h3>
                <p>
                  A mobile app for managing personal finances, built with React
                  Native.
                </p>
                <a
                  href="https://github.com/yourusername/project3"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </section>

          <section>
            <div class="p-12 bg-gray-900 text-white rounded-xl">
              <div class="">
                <h2 class="pb-6 text-center text-2xl">
                  Trusted by the world's most innovative teams
                </h2>
                <div class="flex justify-evenly">
                  <img
                    alt="Transistor"
                    src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg"
                    width="158"
                    height="48"
                    class="ew pv ud ara czm"
                  />
                  <img
                    alt="Reform"
                    src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
                    width="158"
                    height="48"
                    class="ew pv ud ara czm"
                  />
                  <img
                    alt="Tuple"
                    src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
                    width="158"
                    height="48"
                    class="ew pv ud ara czm"
                  />
                  <img
                    alt="SavvyCal"
                    src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
                    width="158"
                    height="48"
                    class="ew pv ud ara cbw czm"
                  />
                  <img
                    alt="Statamic"
                    src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
                    width="158"
                    height="48"
                    class="ew fd pv ud ara cbz czm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="p-6 bg-gray-100">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="mt-2">
              Feel free to reach out for any inquiries or collaborations!
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:info@example.com"
                className="text-blue-600 hover:underline"
              >
                info@example.com
              </a>
            </p>
          </section>
          <footer className="bg-blue-600 text-white text-center p-4">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Home;
