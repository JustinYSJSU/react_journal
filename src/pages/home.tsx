import { Sidebar } from "../components/sidebar"
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
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <main className="px-3">
        <h1> Welcome to Journal.</h1>
        <p className="lead"> Journal allows you to write and save your own private entries.</p>
        <p className="lead">
          <a href="/newEntry" className="btn btn-lg btn-secondary fw-bold"> Get started </a>
        </p>
      </main>
      <footer className="mt-auto">
        <p> React Project by <a href="https://github.com/JustinYSJSU" className="text-black"> @JustinYSJSU </a>.</p>
      </footer>
    </div>


  )
}