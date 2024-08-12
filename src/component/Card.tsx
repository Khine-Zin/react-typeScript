import { Data } from "../types/data"

interface Props{
  item:Data
}

const Card = ({item}:Props) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
        <div className="flex flex-col justify-center items-center">
        <img className="rounded-lg" src={item.image.desktop}/>
        <button type="button" className="flex gap-1 mt-[-10px] md:py-2.5 md:px-5 py-3.5 px-10 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-full shadow-lg hover:bg-orange-100 ">
            <svg className="text-yellow-500" xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
            <p className="">Add to Cart</p>
        </button>
       </div>
      <div className="flex flex-col">
        <span className="text-gray-400 text-sm">Weffle</span>
       <span className="font-semibold">Weffle with Berries</span>
       <span className="text-orange-800 text-lg font-semibold">$25.6</span>
      </div>
    </div>
  )
}

export default Card