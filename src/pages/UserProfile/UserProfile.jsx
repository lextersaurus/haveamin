import { useEffect, useState } from "react"
import { getUserProfile } from "../../services/userService"

import UserCard from "../../components/UserCard/UserCard"


const UserProfile = () => {
    const [user, setUser] = useState({})

    const handleUserProfile= async () => {
          const response = await getUserProfile()
         setUser(response)
      }

    useEffect(() => {
        handleUserProfile()
    }, [])

    console.log(user);

  return (
    <div>
      <h2>Perfil de usuario</h2>
      {user && <UserCard user={user} />}
    </div>
  )
}

export default UserProfile