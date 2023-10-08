import App from './App.jsx'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skill from './pages/Skill.jsx'
import Project from './pages/Project.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SingUp from './pages/SingUp.jsx'

const MainApp = () => {
const isLoggedIn = localStorage.getItem("LoggedIn")
const navigate =  useNavigate()

  return (
    
         <Routes>
          <Route path='/' element={<App/>}>
              <Route path='/home' element={<Home/>}/>
              {isLoggedIn ? (
                    <>
                      <Route path='/about' element={<About/>}/>
                      <Route path='/skill' element={<Skill/>}/>
                      <Route path='/project' element={<Project/>}/>
                    </>
              ) : (
                <><Route path='/*' element={() => {
                          navigate('/login');
                          return null;
                      } } /><Route path='/about' element={() => {
                          navigate('/login');
                          return null;
                      } } /></>
              )}
              
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/singUp' element={<SingUp/>}/>
         </Route>
      </Routes>
    
  )
}

export default MainApp