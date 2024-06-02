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
    <div className="container">
  <div className="welcome-box">
    <p className="welcome-text">Welcome to Journal.</p>
    <p className="subtitle">Share your thoughts today.</p>
    <div className="continue-box">
      <p className="continue-text">Continue with...</p>
      <div className="button-container">
        <button className="google-button" onClick={signInWithGoogle}>Google</button>
      </div>
    </div>
  </div>
  <p className="info-text">With a Google account, you can create, save, and view entries.</p>     
</div>



  )
}