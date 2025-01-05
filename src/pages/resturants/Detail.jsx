import { useEffect, useState } from "react";
import api from "../../api/index";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const Detail = () => {
    const [restaurant,setRestaurant]=useState(null);
    const {id}= useParams();
    useEffect(()=>{
        
        api.get(`/restaurants/${id}`) //
        .then((res)=>setRestaurant(res.data)
        );
    },[]);

        if(!restaurant) return <Loader/>

  return (
    <div className=" flex gap-5">
       <img src= {restaurant.photo} className="w-[150px] h-[150px] rounded-md " />

       <div className=" flex flex-col justify-between">


        <div className="flex gap-4 text-red-500">

        <p className="flex items-center gap-2"> 
                <FaArrowDown/>
                <span className="text-gray-700"> min 50 TL </span>
            </p>
            
            <p className="flex items-center gap-2"> 
                <FaClock/>
                <span className="text-gray-700"> min 25 dak. </span>
            </p>
        </div>

            <h1 className="text-2xl md:tect-3xl font-semibold"> {restaurant.name} </h1>

            <p className="flex items-center gap-2">
                <FaStar className="text-red-500"/>
                <span className="text-gray-700"> {restaurant.rating} </span>
                <button className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition"> Yorumları Gör </button>
            </p>

            


       </div>

    </div>
  )
}

export default Detail