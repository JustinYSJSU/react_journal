import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "../css/login.css"

export const Main = () => {
  const navigate = useNavigate()

  //user log in with google, save the result (y/n)
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    navigate("/home")
  }

  return (
    <div className="journal-container">
  <header className="journal-header">
    <h1>Welcome to Journal</h1>
    <p>Share your thoughts today.</p>
  </header>
  <div className="journal-content">
    <p>Continue with...</p>
    <div className="auth-buttons">
      <button className="google-signin-btn" onClick={signInWithGoogle}>Continue with Google</button>
    </div>
  </div>
  <footer className="journal-footer">
    <p>With a Google account, you can create, save, and view entries.</p>
  </footer>
</div>


  )
}