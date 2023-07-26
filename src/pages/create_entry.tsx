import { Entry } from "../components/entry"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { Header } from "../components/header"

export const CreateEntry = () =>{
  const [user] = useAuthState(auth)
  user && console.log(`Logged in as  ${user?.displayName}`)
    return (
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header />
          <Entry />
      </div>
    )
}