function SearchBar() {
  return(
    <form className="inline-flex items-center ml-5 mt-5">
      <div className="block">
        <input
          type="text" 
          id="search" 
          className="bg-backgroundWhite-100 border rounded-md block w-full pl-2 p-1 font-sans font-medium text-text-200 text-[12px]"
          placeholder="Type here to search"
        />
      </div>
    </form>
  )
}

export default SearchBar