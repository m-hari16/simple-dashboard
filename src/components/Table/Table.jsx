import { Link } from "react-router-dom"

function Table({id, date, title, content}) {
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
        <tr className="h-16 text-text-100 text-[14px] font-sans font-normal text-center">
          <td className="border">06 Mar 2023</td>
          <td className="border">Lorem ipsum</td>
          <td className="border">Lorem ipsum, dolor sit amet</td>
          <td className="border flex justify-center h-16 space-x-2">
            <Link 
              to="/article/edit"
              className="w-6 h6"
            >
              <img src="/img/edit.svg" alt="edit-data" className="w-full h-full"/>
            </Link>
            <Link
              to="#"
              className="w-6 h6"
            >
              <img src="/img/trash.svg" alt="delete-data" className="w-full h-full"/>          
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table