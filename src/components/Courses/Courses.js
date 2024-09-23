import React from 'react'
import Navbar from '../atoms/Navbar'
import CourseCards from './CourseCards';

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


const Courses = () => {
  return (
    <>
    <Navbar/>

    <div className='w-full min-h-screen flex justify-center'>

      <div className='w-[80%] h-full flex flex-wrap justify-center gap-10 pt-28'>
      {courses.map((course, index) => (
          <CourseCards />
        ))}
      </div>

   

    </div>
      
    </>
  )
}

export default Courses
