import { useData } from "../contexts/GeneralContext"
import { CartData } from "../types/data";

const CartItem = () => {
    const {cartData}=useData();
  return (
    <div className="mt-5">
        {
          cartData &&  cartData.map((item:CartData)=>{
            return <div className="mb-4 border-b pb-5">
            <div className='flex mx-auto w-full justify-between items-center'>
        <div className='flex flex-col gap-2'>
        <p className='font-RedHatText font-bold text-gray-600'>{item.category}</p>
        <div className='flex justify-between items-center w-[120px]  font-semibold  font-RedHatText text-sm'>
            <p className='text-red-500'>{item.quantity}x</p>
            <p className='text-gray-400'>@${item.price}</p>
            <p className='text-gray-400'>${item.price*item.quantity}</p>
        </div>
    </div>
    <div className='border border-gray-400 p-1 rounded-full cursor-pointer'>
       <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
    </div>
    </div>
            </div>
          })
        }
    </div>
  )
}

export default CartItem