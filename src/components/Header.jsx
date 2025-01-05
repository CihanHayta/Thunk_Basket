import { IoRestaurant } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import {  useSelector } from "react-redux";


import { Link } from 'react-router-dom';

const Header = () => {
  const {restaurants}= useSelector((store)=> store.restaurantReducer);
  const {cart}= useSelector((store)=> store.cartReducer);

  const TotalAmount = cart.reduce((total,i)=> total + i.amount, 0);

  return (
    <header className="shadow">
      <div className=" container flex justify-between items-center">
        <Link to="/" className="text-red-500 font-bold text-2xl font-mono md:text-3xl" > Thunk Sepeti
        </Link>

        <div className=" flex gap-5"> 

          <Link to="/" className="flex items-center gap-1 hover:underline 
      cursour-pointer "  > Yakınınızda {restaurants.length} <IoRestaurant className="text-red-500" />
          <span className="max-md:hidden" >resturant Var</span> </Link> 
          
            <button className="button">Giriş Yap</button>
            <button className="button">Kayıt Ol</button>

            <Link to = "/cart" className="flex items-center gap-2 px-3 hover:bg-red-300 rounded-full transition" >
            <CiShoppingBasket  className="w-50 h-10"/>
            <span> {TotalAmount} </span>
            </Link>
            
           </div>

      </div>
    </header>
  )
}

export default Header;