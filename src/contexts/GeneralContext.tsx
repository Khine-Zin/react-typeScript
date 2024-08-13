import React, { useContext, useEffect, useState } from "react";
import { CartData, Data, MenuData } from "../types/data";
import { data } from "../data/data";

interface Props{
    data:Data[],
    menuData:MenuData[],
    cartData:CartData[]
}


 export const GeneralContext=React.createContext<Props[] | null>(null);

const GeneralContextProvider = ({children}:{children:React.ReactNode}) => {
    const [menuData,setMenuData]=useState<MenuData[]>([]);
    const [cartData,setCartData]=useState<CartData[]>([]);

    useEffect(() => {
      const updatedData = data.map(item => ({
          ...item,add:true,quantity:0
      }));
      setMenuData(updatedData);
  }, [data]);

  const addToCart=(item:MenuData)=>{
    if(data){
      setCartData([...cartData,{...item,quantity:1}])
    }else{
      return "Something Went Wrong"
    }

    const addMenuData = menuData.map((data: MenuData) =>{
      if(data.id==item.id){
        return {...data,add:false,quantity:1}
      }else{
        return data
      }
    });
    setMenuData(addMenuData)
  }
   
  return (
    <GeneralContext.Provider value={{menuData,addToCart,cartData}}>
      {children}
   </GeneralContext.Provider>
  )
}

export function useData() {
    const GeneralContextValue = useContext(GeneralContext);
    if (!GeneralContextValue) {
      throw new Error("useDatas used outside of the Provider");
    }
    return GeneralContextValue;
  }


export default GeneralContextProvider