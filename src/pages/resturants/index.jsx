import React from 'react'
import Products from './Product';
import Detail from './Detail';

const Restaurant = () => {

  
  return (
    <div>


       <div className=' shadow'>

        <div className='container'>
    <Detail/>
        </div>
        
       </div>


       <div className='shadow'> 
          <div className='container'>
          <Products/> 
          </div>
         </div>


    </div>
  )
}

export default Restaurant;