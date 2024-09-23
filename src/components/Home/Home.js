import React from "react";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Navbar from "../atoms/Navbar";
import Card from "../atoms/card";

const HomePage = () => {
  const courses = [
    {
      name: "C++ Mastery",
      description:
        "Learn C++ from beginner to advanced with quizzes and coding challenges.",
    },
    {
      name: "Java for Beginners",
      description:
        "An introduction to Java with a focus on object-oriented programming.",
    },
    {
      name: "Web Development",
      description:
        "Learn HTML, CSS, and JavaScript to build your own websites.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "The courses are well-structured and easy to follow. Highly recommend!",
    },
    {
      name: "Jane Smith",
      feedback:
        "I love the quizzes and the coding challenges at the end of each module.",
    },
    {
      name: "Alex Johnson",
      feedback:
        "The built-in code editor makes it super easy to practice coding.",
    },
  ];

  return (
    <div>
              <Navbar />
      <div className="pt-5 side-curves h-screen pt-10">

        <div className="w-full h-auto p-5 flex justify-center">
          <div className="w-[70%]">
            <div className="w-full h-[30vh] text-center flex flex-col items-center justify-center">
              <h1 className="text-8xl font-light text-gray-800">
                Connect.Learn
              </h1>
              <p className="mt-5">
                Your data is profitable asset. With Learvibe you control what{" "}
                <br />
                data to share anonymoysly and earn from it.
              </p>
            </div>
            <div className="flex gap-7 mt-5">
              <Card height={250} width={300}>
                <img src="./leetcode.jpg" alt="" className="w-[50px]" />
                <img src="./leetcode.jpg" alt="" className="w-[50px]" />
                <img src="./leetcode.jpg" alt="" className="w-[50px]" />
                {/* Aptitude Questions <br/>Interview Questions */}
              </Card>
              <Card height={320} width={350}>
                C++ 
                <br/>
                Oops in C++
              </Card>
              <Card height={280} width={300}>
              <img src=" https://img.freepik.com/free-psd/instagram-application-logo_23-2151544100.jpg" alt="" className="w-[65px]" />
               
              <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" className="w-[70px]"/>
               
              
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Features />
        <Testimonials testimonials={testimonials} />
        <Footer />
    </div>
  );
};

export default HomePage;
