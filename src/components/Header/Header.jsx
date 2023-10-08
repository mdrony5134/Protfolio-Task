import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div>
       <div>
        <nav className="nav-bar">
           <div className="nav-item">
            <li> <Link className="link"  to='/home'>Home</Link> </li>
            <li><Link  className="link" to='/about'>About</Link></li>
            <li><Link  className="link" to='/skill'>Skill</Link></li>
            <li><Link  className="link" to='/project'>Project</Link></li>
            <li><Link  className="link" to='/login'>Login</Link></li>
           </div>
        </nav>
       </div>
    </div>
  )
}

export default Header