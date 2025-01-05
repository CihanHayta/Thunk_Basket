
import { useEffect, useState } from "react";
import api from "../../api/index";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { FaFire } from "react-icons/fa";
import Kart from "./Kart";


const Products = () => {

  const [products,setProduct]=useState(null);
  const [error,setError]=useState(null);

  const {id}= useParams();
  useEffect(()=>{
      
      api.get(`/products?restaurantId=${id}`) //
      .then((res)=>setProduct(res.data)
      ).catch((err)=> setError(err.message));
  },[]);  
 

  
  if(error) return <Error/> ;

  if(!products) return <Loader/>
  
  if(products.length === 0) return    <p> Restorant servis Saatleri dışındadır</p>



  return (
   <div>
     <h2 className="text-2xl font-bold flex items-center gap-2">
      <FaFire className="text-red-500"/>
      Popüler
    </h2>

    <p className="text-gray-600">Restaurantın en Çok tercih Edilenleri</p>
    

    <div className="grid lg:grid-cols-2 gap-5 mt-4">
      {products.map((item)=> <Kart key={item.id} product={item} /> )}
    </div>

   </div>
  );
};

export default Products;