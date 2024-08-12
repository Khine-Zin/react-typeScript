import React, { useContext, useEffect, useState } from "react";
import { Data, MenuData } from "../types/data";
import { data } from "../data/data";

interface Props{
    data:Data[]
    menuData:MenuData[]
}


 export const GeneralContext=React.createContext<Props[] | null>(null);

const GeneralContextProvider = ({children}:{children:React.ReactNode}) => {
    const [menuData,setMenuData]=useState<MenuData[]>([]);

    useEffect(() => {
      const updatedData = data.map(item => ({
          ...item,add:true
      }));
      setMenuData(updatedData);
  }, [data]);


   
  return (
    <GeneralContext.Provider value={menuData}>
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