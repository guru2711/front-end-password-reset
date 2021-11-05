import React, { useState } from 'react'
import axios from "axios"

function Useremail() {
const [mailid , setMailId] = useState("")

const send = (e) => {
    e.preventDefault()
try{
    if(mailid === ""){
        alert("please enter your email Id")
        
    }else{
        axios.post("http://password-reset-flow.herokuapp.com/",{
            emailid : mailid
        })
        alert(mailid)
        console.log(mailid)
    }
    
}catch(err){
    console.log(err)
}
}

    return (
        <div>
        <form onSubmit={send}>
        <h1>Password reset Flow</h1>
            <br/>
            <h3> Enter your Email ID to reset Your Password </h3>
            <br/>
            <label>Email ID</label><br/>
            <input type="email" placeholder="enter your email address" onChange={(event) => {
                setMailId(event.target.value)
            }}></input>
            <br/>
            <br/>
            <button  type="submit">Send</button>
        </form>
            
        </div>
    )
}

export default Useremail
