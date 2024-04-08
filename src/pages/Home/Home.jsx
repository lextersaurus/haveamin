import { Divider } from "@mui/material"
import CategoryEvent from "../CategoryEventList/CategoryEventList"
import AllEvents from "../AllEvents/AllEvents"


const Home = () => {
  return (
    <>
      <CategoryEvent/>
      <Divider variant="middle" />
      <AllEvents/>
    </>
  )
}

export default Home