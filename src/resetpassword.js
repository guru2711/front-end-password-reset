import React, { useState } from 'react'

export default function Resetpassword() {
    const [mailid , setMailId] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    const send = (e) => {
        e.preventDefault()
        if(password === "" || confirmpassword === "" || mailid === "") {
            alert("please enter password")
        }
        else if(password === confirmpassword){
            console.log(mailid + " "+ password)
        }else{
            alert("please Do write correct credentials")
        }
        
    }
    return (
        <div>
            <form onSubmit={send}>
                <h1>Password Reset</h1>
                <br/>
                <br/>
                <label>EmailId</label>
                <br/>
                <input type="email" placeholder="enter your email address" onChange={(event) => {
                    setMailId(event.target.value)
                }}></input>
                <br/>
                <br/>
                <label>Password</label><br/>
                <input type="password" name="pass" placeholder="enter your password" autoComplete="on" onChange={(event) => {
                    setPassword(event.target.value)
                }}></input>
                <br/>
                <br/>
                <label>confirm  Password</label><br/>
                <input type="password" name="pass2" placeholder="confirm password" autoComplete="on" onChange={(event) => {
                    setConfirmPassword(event.target.value)
                }}></input>
                <br/>
                <br/>
                <button type="submit">reset</button>
            </form>
        </div>
    )
}
