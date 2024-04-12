import { Divider } from "@mui/material"
import CategoryEvent from "../../components/CategoryEventList/CategoryEventList"
import AllEvents from "../../components/AllEvents/AllEvents"
import { useEffect, useState } from "react"
import { getUserProfile } from "../../services/userService"


const Home = () => {
  const [userId, setUserId] = useState()
  const [userData, setUserData] = useState()
  
  const handleUserData= async () => {
    const response = await getUserProfile()
    setUserData(response)
  }

  const handleUserId = () => {
    setUserId(localStorage.id)
  }
  
  useEffect(() => {
    handleUserData()
    handleUserId()
  }, [])

  return (
    <>
      <CategoryEvent/>
      <Divider variant="middle" />
      <AllEvents/>
    </>
  )
}

export default Home