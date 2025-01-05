import React from 'react'
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Hatalıdır from '../../components/Error';
import BasketCard from "../cart/Card";
import Warning from "../cart/warning";
import OrderBox from './OrderBox';



const Cart = () => {
  

      const {isLoading,error,cart}=useSelector((store)=>store.cartReducer);


  return (
    <div className='container'>
        <h1 className='text-2xl font-bold mb-5'> Sepet </h1>
  
      <div className='grid md:grid-cols-[1fr_300px] gap-4'>

        <div>
          {isLoading ? <Loader/> : error ? <Hatalıdır info={error}/> : cart.length ===0 ? ( <Warning/> ) :
          cart.map((item)=> <BasketCard key={item.id} product ={item} />)}
        </div>


      <OrderBox cart={cart} />


      </div>


    </div>
  )
}

export default Cart;