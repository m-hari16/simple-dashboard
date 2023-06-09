import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import SubMenu from "../../components/SubMenu/SubMenu";
import Table from "../../components/Table/Table";
import DashboardTemplate from "../Template/DashboardTemplate";
import { useEffect, useState } from "react";
import { getArticle } from "../../api/article";

function ArticleList() {
  const [index, setIndex] = useState([])
  const [loadnig, setLoading] = useState(true)

  useEffect(() => {
    getArticle("/api/articles", "page=1&page_size=10")
      .then((result)=>{
        setIndex(result.data)
      })
      .finally(() => {
        setLoading(false)
      })
  },[])

  const handleSearch = async (q) => {
    console.log(q)
    if(q.length > 3){
      getArticle("/api/articles", `search=${q}&page=1&page_size=5`)
      .then((result)=>{
        setIndex(result.data)
      })
      .finally(() => {
        setLoading(false)
      })
    }
  }

  return(
    <DashboardTemplate>
      <ul className="flex border-b-2 pb-4 space-x-2">
        <li>
          <SubMenu  
            url={"/"}
            icon={"/img/submenu-article-active.svg"}
            title={"Article"}
            description={"List Article"}
            isActive={true}
          />
        </li>
        <li>
          <SubMenu  
            url={"/article/add"}
            icon={"/img/submenu-edit-article-nonactive.svg"}
            title={"Add / Edit"}
            description={"Detail Article"}
            isActive={false}
          />
        </li>
      </ul>
      <div className="mt-5 pb-5 bg-backgroundWhite-100">
        <div className="flex justify-between">
          <SearchBar onSearch={handleSearch} />
          <Link
            to="/article/add"
            className="flex rounded-md bg-backgroundGreen-300 w-[60px] h-[24px] mt-5 mr-5 items-center justify-center"
          >
            <span className="text-white text-[13px] font-sans font-semibold">+ Add</span>
          </Link>
        </div>
        <div className="flex justify-center">
          {
            loadnig ? (
              <p className="m-5">Loading...</p>
            ) : (
              <Table 
                data={index.articles}
              />
            )
          }
        </div>
        <div className="flex w-full justify-end pr-5">
          <Pagination/>
        </div>
      </div>
    </DashboardTemplate>
  )  
}

export default ArticleList