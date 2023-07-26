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
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0"> Journal </h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
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