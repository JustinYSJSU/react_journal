import { Entry } from "../components/entry"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { Header } from "../components/header"

export const CreateEntry = () =>{
  const [user] = useAuthState(auth)
  user && console.log(`Logged in as  ${user?.displayName}`)
    return (
      <div>
          <Header />
          <Entry />
      </div>
    )
}