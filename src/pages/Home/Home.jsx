import { Divider } from "@mui/material"
import CategoryEvent from "../../components/CategoryEventList/CategoryEventList"
import AllEvents from "../../components/AllEvents/AllEvents"


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