import About from './About'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Missing from './Missing'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Nav from './Nav'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import EditPost from './EditPost'
import { DataProvider } from './context/DataContext'

function App() { 
  return (    
    <div className='App'> 
    <DataProvider>   
          <Header title='Blog app'/>
          <Nav />
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='post'>
                <Route index element={
                        <NewPost  />}/> 
                <Route path=':id' element={<PostPage  />} />
              </Route>
              <Route path='/edit/:id' element={<EditPost />} />
          <Route  path='about' element={<About />} />
          <Route path='*' element={<Missing />} />
          </Routes>
          <Footer />
      </DataProvider>
    </div>
  )
}

export default App
