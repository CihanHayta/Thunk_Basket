
import api from "../../api";
import ActionTypes from "../actionTypes";


// 
export const getBasket = ()=> async(dispatch)=>{
    dispatch({type:ActionTypes.CART_LOADING});
    api.get("/cart").then((res)=> dispatch({type:ActionTypes.CART_SUCCESS, payload: res.data}) )
    .catch((err)=> dispatch({type:ActionTypes.CART_ERROR, payload:err.message}) );
};



 export const createItem=(product)=>async(dispatch)=>{


  const  newItem = {
        id: product.id,
        category: product.category,
        title: product.title,
        price: product.price,
        photo: product.photo,
        amount:1,
    };

    api.post("/cart", newItem).then((res)=>dispatch({type: ActionTypes.CREATE_ITEM, payload:newItem}) )
   
    
};

export const updateItem = (id, newAmount) => async(dispatch)=>{

    api.patch(`/cart/${id}`, {amount: newAmount})
    .then((res)=>dispatch({type: ActionTypes.UPDATE_ITEM, payload: res.data}))

};

export const deleteItem = (id) => async(dispatch)=>{

    api.delete(`/cart/${id}`)
    .then(()=> dispatch({type: ActionTypes.DELETE_ITEM, payload:id}))

};