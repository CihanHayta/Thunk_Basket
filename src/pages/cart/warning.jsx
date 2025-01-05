import React from 'react'
import { Link } from 'react-router-dom'

const Warning = () => {
  return (
    <div className=' flex flex-col items-center gap-4 mt-20'>
        <h1>
            Sepette Herhangi Bir ürün bulunmuyor
        </h1>
        <Link to="/" className='border p-2 shadow rounded hover:bg-gray-200'>
            Resturantlara Göz Atınız
        </Link>
    </div>
  )
}

export default Warning