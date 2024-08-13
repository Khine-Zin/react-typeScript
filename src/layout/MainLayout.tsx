import Card from "../component/Card"
import CartItem from "../component/CartItem";
import EmptyCart from "../component/emptyCart";
import { useData } from "../contexts/GeneralContext"
import {  MenuData } from "../types/data";


const MainLayout= () => {
  const {menuData,cartData}=useData();
 
return (
    <div className="md:p-10 p-14 md:flex gap-14 w-full h-auto">
        <div className="md:w-[60%]">
            <h1 className="font-bold text-3xl mb-5">Dessert</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                  menuData && menuData.map((item:MenuData,index:number)=>{
                    return <Card key={index} item={item}/>
                  })
                }
            </div>
        </div>
        <div className="md:w-[40%]">
              <div className="bg-white rounded-xl p-8 h-auto flex flex-col gap-3">
                <h1 className="text-2xl font-bold text-red-500 ">Your Cart (0)</h1>
                {
                  cartData.length =="" ? <EmptyCart/> : <CartItem/>
                }
               </div>
        </div>
        
    </div>
  )
}

export default MainLayout