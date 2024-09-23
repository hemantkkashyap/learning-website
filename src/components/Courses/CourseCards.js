import React from 'react'
import { Link } from 'react-router-dom'

const CourseCards = () => {
  return (
    <div className=' min-w-[300px] min-h-[300px] bg-white border border-gray-300 rounded-md flex justify-center items-center'>
      
      <Link to={'/editor'}>
      <button>Click here !!</button></Link>
    </div>
  )
}

export default CourseCards
