import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"

function DashboardTemplate({children}) {
  return(
    <>
      <Sidebar/>
      <Navbar/>
      <main className="ml-60 p-[30px]">
        {children}
      </main>
    </>
  )
}

export default DashboardTemplate