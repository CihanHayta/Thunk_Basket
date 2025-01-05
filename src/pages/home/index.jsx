import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Hatalıdır from "../../components/Error";
import Card from "./Card";



const Konut= () => {
  const {isLoading ,error,restaurants}= useSelector((store)=> store.restaurantReducer)
  console.log(restaurants);
  

  const dispatch =useDispatch();

 const retry = ()=> dispatch(getRestaurants());


  return (
 

  <div className="container">
    <h1 className="font-semibold text-xl md:text-2xl mb-5" >Yakınınızdaki Resturantlar</h1>

    {isLoading ? <Loader/> :
     error ? 
     <Hatalıdır info= {error} retry={retry} />  :
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">  
      {restaurants.map((item)=> <Card key={item.id} restaurant = {item} /> )} </div> }
  
  </div>

  );
};

export default Konut;