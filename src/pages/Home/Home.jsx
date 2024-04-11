import { Divider } from "@mui/material"
import CategoryEvent from "../../components/CategoryEventList/CategoryEventList"
import AllEvents from "../../components/AllEvents/AllEvents"
import { useState } from "react";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <CategoryEvent/>
      <Divider variant="middle" />
      <AllEvents searchQuery={searchQuery}/>
    </>
  )
}

export default Home