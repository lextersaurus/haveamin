import { useEffect, useState } from "react"
import { getUserProfile } from "../../services/userService"
import { useParams } from 'react-router-dom'
import UserCard from "../../components/UserCard/UserCard"


const UserProfile = () => {
    const [user, setUser] = useState([])
    const { userId } = useParams()

    const handleUserProfile= async () => {
          const response = await getUserProfile(userId)
         setUser(response)
      }

    useEffect(() => {
        handleUserProfile()
    }, [userId])

  return (
    <div>
      <h2>Perfil de usuario</h2>      
       <UserCard user={user} />
    </div>
  )
}

export default UserProfile