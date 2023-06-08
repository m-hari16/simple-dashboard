import {Link} from 'react-router-dom'

function Sidebar() {
  return(
    <aside className="fixed top-0 left-0 w-60 h-full bg-backgroundWhite-100 border-r-2">
      <div className="ml-[50px] mt-7">
        <img src="/img/menu-togle.svg" alt="togle-sidebar" className="w-[30px] h-[30px]"/>
      </div>
      <img src="/img/logo.svg" alt="logo" className="mt-[53px] ml-[74px]"/>
      <ul>
        <li className="block w-[179px] h-11 bg-backgroundGreen-200 ml-[26px] mt-12 border-l-4 border-backgroundGreen-300">
          <Link to="/" className="flex items-center w-full h-full pl-5">
            <img src="/img/article-menu.svg" alt="icon-article"/>
            <span className="ml-3 text-backgroundGreen-300">Article</span>
          </Link>
        </li>
      </ul> 
    </aside>
  )
}

export default Sidebar