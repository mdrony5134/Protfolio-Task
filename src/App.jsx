import { useEffect } from 'react'
import './App.css'
import GetUser from './components/CustomHook/GetUser'
// import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const user = GetUser()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!!user && !user?.email)navigate('/login')
  },[navigate, user])

  return (
    <>
       <Header/>
       <Outlet/>
       {/* <Footer/> */}
    </>
  )
}

export default App
