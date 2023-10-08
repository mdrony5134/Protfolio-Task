import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handelLogin = () =>{
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if(storedUser && storedUser.email === email && storedUser.password === password){
      localStorage.setItem("LoggedIn", "true")
      navigate("/skill")
    }else{
      alert("email or password invalid")
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <input 
      type="email" 
      placeholder="Enter Your Email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />

      <input 
      type="password" 
      placeholder="Enter Your Password" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handelLogin}>Login</button>
      <p>Don't have an account? <a href="/SingUp">Click here</a> </p>
    </div>
  )
}

export default LoginPage