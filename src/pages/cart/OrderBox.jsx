

const OrderBox = ({cart}) => {

 const TotalAmount = cart.reduce((total,i)=> total + i.amount, 0);
 const TotalPrice = cart.reduce((total,i)=> total + i.amount * i.price,0);


  return (
  
    <div className="p-5 rounded-md border h-fit">
        <h2 className="font-semibold text-xl">sipariş Detayları</h2>

        <p className="flex items-center gap-2 my-4">
          <span className="text-gray-600">  Ürün Adedi</span>
          <span className="text-lg font-bold text-red-500"> {TotalAmount} </span>
        </p>
        

        <p className="flex items-center gap-2 my-4">
          <span className="text-gray-600">  Toplam Fiyat: </span>
          <span className="text-lg font-bold text-red-500"> {TotalPrice.toFixed(2)} $ </span>
        </p>


    </div>
  )
}

export default OrderBox;