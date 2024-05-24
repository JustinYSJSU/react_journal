import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"

export const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const signUserOut = async () => {
        await signOut(auth)
        navigate("/")
    }
    return (
        <header>
            <div>
                <h3> Journal </h3>
                <nav>
                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                    <a className="nav-link" href="/newEntry"> New Entry </a>
                    <a className="nav-link" href="/viewEntries"> View Entries </a>
                    <a className="nav-link" href="/about"> Learn More </a>
                    <button className="btn btn-danger" onClick={signUserOut}> Sign Out </button>
                </nav>
            </div>
        </header>
    )
}