import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


const MainLayout = () => {
  return (
    <>
    { localStorage.getItem('token') ? <Header/> : null }
        
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout