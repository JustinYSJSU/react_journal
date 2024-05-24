import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import LoginCSS from "../css/login.module.css"

export const Main = () => {
  const navigate = useNavigate()

  //user log in with google, save the result (y/n)
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    navigate("/home")
  }

  return (
    <div className={LoginCSS['login-container']}>
      <div>
        <div>
          <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        </div>
        <div>
          <div>
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
        <span/>
      </div>
    </div>

  )
}