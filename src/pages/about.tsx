import "../css/about.css"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Header } from "../components/header"

export const About = () => {
  const [user, loading] = useAuthState(auth)
  loading && console.log("loading")
  user && console.log(`Logged in as  ${user?.displayName}`)


  return (
    <div>
      <Header />

      <div>
        <h1> About Journal</h1>
      </div> 

      <div>
          <div>
            Why Journal?
          </div>
          <div>
            <blockquote>
              <p>Journal was created with the purpose of learning React, CSS and Google Firebase 
                while also providing users with a place to write their thoughts. 
              </p>
              <p> <a href = "https://github.com/JustinYSJSU/react_journal"> Project Github </a></p>

            </blockquote>
          </div>
       </div>

        <div>
          <div>
            Creator
          </div>
          <div>
            <blockquote>
              <p> Journal was created by Justin Yamamoto, who is studying Software Engineering
                at San Jose State University. He will be graduating in the Spring of 2024. 
              </p>

              <p> In his free time, he enjoys listening to music, reading, and playing VALORANT / golf.</p>

              <p> Check out his LinkedIn / Github below. </p>

              <p> <a href = "https://www.linkedin.com/in/justin-yamamoto-b9192824b/"> LinkedIn</a> </p>
              <p> <a href = "https://github.com/JustinYSJSU"> GitHub</a> </p>

            </blockquote>
          </div>
      </div>
    </div>
  )
}