import React,{useState} from 'react'
import {withRouter} from 'react-router-dom'
import Db from '../StorageManagement'
import {UserConsumer} from '../UserContext'

function SignUp(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleChange = (event) => {
       const {name, value} = event.target
       name==="username" && setUsername(value) 
       name==="password" && setPassword(value)
    }
    function handleSubmit(event){
        const register = Db.getInstance().SignUp(username, password)
        !register.error && props.updateAuth(true)
        console.log(localStorage)
        console.log(props.auth)
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