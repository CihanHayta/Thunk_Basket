
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Konut from "./pages/home";
import Restaurant from "./pages/resturants";
import Cart from "./pages/cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/aciton/resActions";
import { getBasket } from "./redux/aciton/BasketActions";



const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getRestaurants());
    dispatch(getBasket());

    
  },[])

  return (
  
      <BrowserRouter>
      <div className="min-h-screen flex flex-col">   
      <Header/>

      <div className="flex-1"> 
      <Routes>
        <Route path="/" element = {<Konut/> } />
        <Route path="/cart" element = {<Cart/> } />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        
      </Routes>
      </div>
     
      <Footer/>
      </div>
      </BrowserRouter>
  
  )
}

export default App