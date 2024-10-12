import {useState} from "react"; 
const SignUp = ()=>{
      const [email,setEmail]= useState("")
      const [pas,setPas] = useState("")
      const [location,setLocation] = useState("")
      const [age,setAge]=useState(0)
      const handleClick = ()=>{
            const payload = {
                email:email,
                pas:pas,
                location:location,
                age:age
            }
            //console.log(payload)
    // connecting FE to BE
           fetch("http://localhost:4500/users/register",{
             method:"POST",
             headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
            })
             .then((res)=>res.json())
             .then((res)=>console.log(res))
             .catch((err)=>console.log(err))
       }
      return(
        <>
        <h1>Registation Form</h1>
        <div>
            Email:<input type="email" placeholder="Enter Email" value={email} onChange= {(e)=>setEmail(e.target.value)}/>
            Password:<input type="password" placeholder="Enter your password" value={pas} onChange={(e)=>setPas(e.target.value)}/>
            Location:<input type="text" placeholder="Enter Your Location" value={location} onChange={(e)=>setLocation(e.target.value)}/>
            Age:<input type="number" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={handleClick}>Submit</button>
        </div>
        </>
      )
}

export default SignUp