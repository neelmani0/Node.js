import { useEffect, useState } from "react";

const handleDelete = (id)=>{
    fetch(`http://localhost:4500/notes/delete/${id}`,{
        method:"DELETE",
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
const Notes = ()=>{
    const [notes,setNotes] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/notes",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setNotes(res)
        })
        .catch(err=>console.log(err))
    },[]);

    return(
        <>
        {notes.length>0?

        notes.map((ele)=>
        <div>
            <h3>{ele.title}</h3>
            <h4>{ele.sub}</h4>
            <p>{ele.body}</p>
            <button onClick={handleDelete(ele._id)}>Delete</button>
        </div>
):<div>
    <h1>There is no notes for the user</h1>
</div>
      }
        </>
        )
}

export default Notes;