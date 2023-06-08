import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ArticleList from './pages/Article/ArticleList'
import NotFound from './pages/NotFound/NotFound'
import CreateArticle from './pages/Article/CreateArticle'


function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ArticleList/>}/>
          <Route path='/article/add' element={<CreateArticle/>}/>
          <Route path='/article/edit' element={<ArticleList/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
