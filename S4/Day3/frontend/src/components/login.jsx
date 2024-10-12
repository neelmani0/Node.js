const { useState } = require("react")

const LogIn = ()=>{
   
    const [email,setEmail]=useState("");
    const [pas, setPas] = useState("");

    const halndleClick = ()=>{
        const payload = {
            email:email,
            pas:pas
        }

        fetch("http://localhost:4500/users/login",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then((res)=>res.json())
          .then((res)=>console.log(res))
          .catch((err)=>console.log(err))
    }

    return(
        <>
        <h1>LogIn Form</h1>
        <div>
            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Your Password" value={pas} onChange={(e)=>setPas(e.target.value)}/>
            <button onClick={halndleClick}>Submit</button>
        </div>
        </>
    )
}

export default LogIn;