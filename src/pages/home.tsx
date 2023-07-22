import { Sidebar } from "../components/sidebar"
import "../css/home.css"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"

export const Home = () => {
  const [user, loading] = useAuthState(auth)
  loading && console.log("loading")
  user && console.log(`Logged in as  ${user?.displayName}`)

  return (
    <div>
      <Sidebar />

      <div className="container" id="home-info">
        <h1 className="display-1"> Welcome to JOURNAL!</h1>
        <h3> Click the "New Entry" button to start writing!</h3>
        <h3> Click the "View Entries" button to see your entries!</h3>
        <h3> Click the "About" button to learn more!</h3>
      </div>
    </div>
  )
}