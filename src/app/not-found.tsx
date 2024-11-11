import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
      <div className='w-full min-h-screen flex flex-col items-center'>
          <h1 className='text-6xl '>This page can not  be found</h1>
          <Link href={"/"}><span className='p-2 bg-blue-400 rounded-2xl'>Home</span></Link>
    </div>
  )
}

export default NotFound