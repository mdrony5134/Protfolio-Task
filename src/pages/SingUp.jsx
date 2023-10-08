import { useState } from "react"
import { useNavigate } from "react-router-dom"



const SingUp = () => {
    const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handelSingUp = () =>{
    if(email && password){
        const user = {email, password}
        localStorage.setItem("user",JSON.stringify(user))
        navigate('/login')
        alert("Sing Up SuccessFully")
    }
    setEmail('')
    setPassword('')
  }
  return (
    <div>
        <h2>Sign Up</h2>
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
      <button onClick={handelSingUp}>SingUp</button>
    </div>
  )
}

export default SingUp