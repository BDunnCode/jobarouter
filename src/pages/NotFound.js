import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non consequuntur 
        possimus libero maiores blanditiis, ipsam quo corrupti temporibus nostrum dolorum 
        nihil dolore quis assumenda eveniet doloribus illo a odit.
      </p>

      <p>Go to the <Link to="/">HomePage</Link></p>
    </div>
  )
}