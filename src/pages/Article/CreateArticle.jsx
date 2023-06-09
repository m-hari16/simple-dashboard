import DashboardTemplate from "../Template/DashboardTemplate";
import SubMenu from "../../components/SubMenu/SubMenu";
import FormInput from "../../components/FormInput/FormInput";
import { addArticle } from "../../api/article";
import { useNavigate } from 'react-router-dom';

function CreateArticle() {  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;

    const newData = {
      title,
      content,
    };

    const postArticle = await addArticle("/api/articles", newData);

    navigate("/")
  }

  return(
    <DashboardTemplate>
      <ul className="flex border-b-2 pb-4 space-x-2">
        <li>
          <SubMenu  
            url={"/"}
            icon={"/img/submenu-article-nonactive.svg"}
            title={"Article"}
            description={"List Article"}
            isActive={false}
          />
        </li>
        <li>
          <SubMenu  
            url={"#"}
            icon={"/img/submenu-edit-article-active.svg"}
            title={"Add / Edit"}
            description={"Detail Article"}
            isActive={true}
          />
        </li>
      </ul>
      <div className="flex mt-5 bg-backgroundWhite-100">
        <FormInput titleForm={"Add"} onSubmit={handleSubmit} />
      </div>
      
    </DashboardTemplate>
  )
  
}

export default CreateArticle