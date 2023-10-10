import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../components/css/login.css'

const LoginPage = () => {
  const [data , setData] = useState({email:'', password: ''})

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handelLogin = () =>{
    // const storedUser = JSON.parse(localStorage.getItem('user'))
    let userList = localStorage.getItem('userList')
    userList= userList?JSON.parse(userList):[]
    let checkUser = userList.some(({email, password})=> (email === data.email && password === data.password))
    if(checkUser){
      localStorage.setItem("user", JSON.stringify(data))
      navigate("/home")
    }else{
      alert("User not registered!")
      navigate("/singUp")
    }

    // if(storedUser && storedUser.email === email && storedUser.password === password){
    //   localStorage.setItem("LoggedIn", "true")
    //   navigate("/skill")
    // }else{
    //   alert("email or password invalid")
    // }
    
  }
  return (
    <div>
      <div className="containers">
      <h3>Login</h3>
      <input 
      type="email" 
      placeholder="Enter Your Email" 
      // value={email}
      onChange={(e)=>setData(pre=>{return{...pre,email:e.target.value}})}
      />

      <input 
      type="password" 
      placeholder="Enter Your Password" 
      // value={password}
      onChange={(e)=>setData(pre=>{return{...pre,email:e.target.value}})}
      />
      <button onClick={handelLogin}>Login</button>
      <p>Don't have an account? <a href="/SingUp">Click here</a> </p>
      </div>
    </div>
  )
}

export default LoginPage