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
    <div>
          <div className="login-container">
            <p> Welcome to Journal .</p>
            <p>Share your thouhts today.</p>
            <div>
              <p>Continue with...</p>
              <div>
                  <button onClick={signInWithGoogle}> Google </button>
              </div>
            </div>
          </div>
          <p> With a Google account, you can create, save, and view entries.</p>     
    </div>

  )
}