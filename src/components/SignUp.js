import React,{useState} from 'react'
import {withRouter} from 'react-router-dom'
import Db from '../StorageManagement'

function SignUp(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleChange = (event) => {
       const {name, value} = event.target
       name==="username" && setUsername(value) 
       name==="password" && setPassword(value)
    }
    function handleSubmit(event){
        const l = Db.getInstance().SignUp(username, password)
        console.log("error: " + l.error + " message: " + l.message)
        console.log(localStorage)
        event.preventDefault()
    }
       return(
              <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} placeholder="Username" name="username" />
            <input type='text' onChange={handleChange} placeholder='password'name='password'/>
            <input type='Submit'/>
        </form> 
    )
}

export default SignUp