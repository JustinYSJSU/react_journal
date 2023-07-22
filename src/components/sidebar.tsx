import { Home } from "../pages/home"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "../css/sidebar.css"

export const Sidebar = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const signUserOut = async () => {
        await signOut(auth)
        navigate("/")
    }

    return(
        <div className="sidebar" id = "side-bar">
        <a href="/newEntry">New Entry</a>
        <a href="/home"> Home </a>
        <a href="/viewEntries">View Entries</a>
        <a href="/about"> About </a>
        <button onClick = {signUserOut} className = "btn btn-danger"> Sign Out </button>
        </div>
    )
}