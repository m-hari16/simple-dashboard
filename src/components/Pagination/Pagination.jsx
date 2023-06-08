import { Link } from "react-router-dom"

function Pagination() {
  return(
    <ul className="inline-flex items-center space-x-3 ">
      <li className="block bg-backgroundWhite-200 w-9 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <img src="/img/left-scroll.svg" alt="icon-article" className="w-5 h-3"/>
        </Link>
      </li>
      <li className="block bg-backgroundGreen-300 w-6 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-white">1</span>
        </Link>
      </li>
      <li className="block bg-backgroundWhite-200 w-6 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-text-100">2</span>
        </Link>
      </li>
      <li className="block bg-backgroundWhite-200 w-6 h-6">
        <Link to="#" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-text-100">...</span>
        </Link>
      </li>
      <li className="block bg-backgroundWhite-200 w-6 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-text-100">10</span>
        </Link>
      </li>
      <li className="block bg-backgroundWhite-200 w-9 h-6">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          <img src="/img/right-scroll.svg" alt="icon-article" className="w-5 h-3"/>
        </Link>
      </li>
  </ul>
  )  
}

export default Pagination