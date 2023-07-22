import { Entry } from "../components/entry"
import { Sidebar } from "../components/sidebar"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"

export const CreateEntry = () =>{
  const [user] = useAuthState(auth)
  user && console.log(`Logged in as  ${user?.displayName}`)

    return (
        <div> 
          <Sidebar />
          <Entry />
        </div>
    )
}