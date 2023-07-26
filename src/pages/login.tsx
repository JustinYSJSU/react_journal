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
      <div className="body d-md-flex align-items-center justify-content-between">
        <div className="box-1 mt-md-0 mt-5">
          <img src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        </div>
        <div className=" box-2 d-flex flex-column h-100">
          <div className="mt-5">
            <p className="mb-1 h-1"> Welcome to JOURNAL .</p>
            <p className="text-muted mb-2">Share your thouhts today.</p>
            <div className="d-flex flex-column ">
              <p className="text-muted mb-2">Continue with...</p>
              <div className="align-items-center">
                  <button className = "btn btn-secondary" onClick={signInWithGoogle}> Google </button>
              </div>
            </div>
          </div>
        </div>
        <span className="fas fa-times" />
      </div>
    </div>

  )
}