import React from 'react'

const Hatalıdır = ({info ,retry}) => {
  return (

    <div className=' bg-red-200 mt-32 p-10 rounded-md text-lg text-center'> 
      <p>Üzgünüz Bir sorun Oluştu</p>
      <p className='font-semibold mt-5'> {info} </p>



      <div>
      {retry &&   <div className='flex justify-center my-10'> 
        <button className='border py-2 px-4 rounded-md hover:bg-zinc-200 transition' onClick={retry}>Tekrar Dene</button> 
        </div> }
      </div>
    
    </div>

   
     
  );
};

export default Hatalıdır;