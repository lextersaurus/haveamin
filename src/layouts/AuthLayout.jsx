import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"


const AuthLayout = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
</>
  )
}

export default AuthLayout