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
    <div id = "login-con">
      <div className="d-flex justify-content-center h-100">
        <div className="card" id = "login-card">
          <div className="card-header">
            <h3>Welcome to JOURNAL</h3>
            <h5> A Google account is required</h5>
          </div>

          <div className="card-body">
            <h3> With JOURNAL, you can write your thoughts securely and freely </h3>
            <h3> To get started, sign in with your Google account</h3>
          </div>

          <div className="card-footer">
            <button className = "btn btn-primary" onClick = {signInWithGoogle}> Sign in with Google</button>
          </div> 				
      </div>
    </div>
  </div>
  )
}