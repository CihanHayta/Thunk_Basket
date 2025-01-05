
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem } from "../../redux/aciton/BasketActions";


const Kart = ({product}) => {
const { cart } = useSelector((store)=> store.cartReducer);
const dispatch =useDispatch();

const found =  cart?.find((cartItem)=>cartItem.id === product.id);

const handleAdd =()=>{

  found ? dispatch(updateItem(product.id, found.amount + 1)) : dispatch(createItem(product));

 
};





  return (
    <div className="grid grid-cols-[1fr_150px] gap-3 border shadow p-3 rounded-lg hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition duraction-300 ">
       <div className="flex flex-col justify-between">
        <div>
            <h1 className="text-xl font-semibold"> {product.title} </h1>
            <p className=" text-gray-500 my-1"> {product.desc} </p>
        </div>
        <p className="text-lg font-semibold"> {product.price} $ </p>
       </div>

       <div className="relative">
        <img src= {product.photo}  className="rounded-md object-cover size-full"/>

        <button className="absolute end-2 bottom-2 bg-white rounded-full hover:bg-red-100 size-8 grid place-items-center" onClick={handleAdd} >
            {found ? found.amount : <FaPlus/> }
        </button>
       </div>
    </div>
  );
};

export default Kart;