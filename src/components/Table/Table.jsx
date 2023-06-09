import { Link } from "react-router-dom"
import { dateFormatter } from "../../utils/dateTimeFormatter"
import { deleteArticle } from "../../api/article"

function Table({data}) {
  const handleDelete = async (id) => {
    await deleteArticle("/api/articles", id)
    window.location.reload();
  }

  return(
    <table className="w-full m-5">
      <thead>
        <tr className="h-9 bg-backgroundGreen-200 text-text-300 text-[10px] font-sans font-medium text-center">
          <th className="border">Date</th>
          <th className="border">Title</th>
          <th className="border">Content</th>
          <th className="border">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((article) => (
            <tr 
              className="h-16 text-text-100 text-[14px] font-sans font-normal"
              key={article.id}
            >
              <td className="border text-center">{dateFormatter(article.created_at)}</td>
              <td className="border pl-5">{article.title.slice(0, 50)}</td>
              <td className="border pl-5">{article.content.slice(0, 80)}</td>
              <td className="border flex justify-center h-16 space-x-2">
                <Link
                  to={`/article/edit?id=${article.id}`}
                  state={article}
                  className="w-6 h6"
                >
                  <img src="/img/edit.svg" alt="edit-data" className="w-full h-full"/>
                </Link>
                <button
                  className="w-6 h6"
                  onClick={() => handleDelete(article.id)}
                >
                  <img src="/img/trash.svg" alt="delete-data" className="w-full h-full"/>          
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table