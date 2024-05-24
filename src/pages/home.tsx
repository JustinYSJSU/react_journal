import "../css/home.css"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../config/firebase"
import { Header
 } from "../components/header"

export const Home = () => {
  const [user, loading] = useAuthState(auth)
  loading && console.log("loading")
  user && console.log(`Logged in as  ${user?.displayName}`)

  return (
    <div>
      <Header />
      <main>
        <h1> Welcome to Journal.</h1>
        <p> Journal allows you to write and save your own private entries.</p>
        <p>
          <a href="/newEntry"> Get started </a>
        </p>
      </main>
      <footer>
        <p> React Project by <a href="https://github.com/JustinYSJSU"> @JustinYSJSU </a>.</p>
      </footer>
    </div>
  )
}