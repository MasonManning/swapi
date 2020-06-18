import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import Db from '../StorageManagement'
import { Context } from '../UserContext'

function SignUp(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [cptName, setCptName] = useState("")
    const context = useContext(Context)
    const handleChange = (event) => {
        const { name, value } = event.target
        name === "username" && setUsername(value)
        name === "password" && setPassword(value)
        name === "captainName" && setCptName(value)
    }
    function handleSubmit(event) {
        const register = Db.getInstance().SignUp(username, password, cptName)
        !register.error && props.updateAuth(true)
        !register.error && context.initSignUp({username: username, password: password, id: register.userId, captainName: cptName})
        event.preventDefault()
    }
    let init = ()=>{}
    return (
        <div>

        {/* <UserConsumer>
        {user => (
            <h1>{user.message}</h1>
        )}
        </UserConsumer> */}
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Captain Name" onChange={handleChange} name='captainName'/>
                <input type='text' onChange={handleChange} placeholder="Username" name="username" />
                <input type='text' onChange={handleChange} placeholder='Password' name='password' />
                <input type='Submit' />
            </form>
        </div>
    )
}

export default SignUp