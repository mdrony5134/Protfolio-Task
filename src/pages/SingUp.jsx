import { useNavigate } from "react-router-dom"
import "../components/css/singup.css"
import { useState } from "react"



const SingUp = () => {
  // const [data , setData] = useState([])
    const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handelSingUp = () =>{
    if(email && password){
      // setData((prev)=>[{...prev, email, password}])
      const user = {email, password}
      localStorage.setItem("user",JSON.stringify(user))
      navigate('/login')

    }
    setEmail('')
    setPassword('')
  }

  // useEffect(()=>{
  //   localStorage.setItem("data",JSON.stringify(data))
  // },[data])
  // navigate("/login")

  return (
    <div>

       <div className="containers">
       <div><h3>Sign Up</h3></div>

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
    </div>
  )
}

export default SingUp