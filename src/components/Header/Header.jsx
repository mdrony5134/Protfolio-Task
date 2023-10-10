import { Link, useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
       <div>
        <nav className="nav-bar">
           <div className="nav-item">
            <li> <Link className="link"  to='/'>Home</Link> </li>
            <li><Link  className="link" to='/about'>About</Link></li>
            <li><Link  className="link" to='/skill'>Skill</Link></li>
            <li><Link  className="link" to='/project'>Project</Link></li>


            <button style={{width: "100px"}} onClick={()=>{localStorage.removeItem("user"), navigate("/login")}}>Logout</button>

           </div>
        </nav>
       </div>
    </div>
  )
}

export default Header