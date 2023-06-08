function Navbar() {
  return(
    <nav className="flex top-0 ml-60 h-[94px] p-[30px] justify-between items-center bg-backgroundWhite-100">
      <div className="flex items-center">
        <h1 className="text-text-100 text-[24px] font-sans font-medium">Article</h1>
      </div>
      <div className="flex items-center">
        <div className="space-x-[14px] flex">
          <img src="/img/lang-en.svg" alt="lang-flag" className="w-6 h-6" />
          <img src="/img/switch.svg" alt="chose-lang" />
        </div>
        <img src="/img/notif.svg" alt="notif" className="w-[27px] h-6 ml-[26px]" />
        <div className="space-x-[14px] flex ml-[75px]">
          <img src="/img/avatar.svg" alt="avatar" className="w-10 h-10" />
          <img src="/img/switch.svg" alt="more" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar