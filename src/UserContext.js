import React, { useState } from 'react'
const Context = React.createContext()
const UserConsumer = Context.Consumer

function UserContext(props) {
    const [captainName, setCaptainName] = useState("")
    const [credits, setCredits] = useState(500000)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const initSignUp = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
    }

    return (
        <Context.Provider value={{userData: {credits: credits}, initSignUp: initSignUp }}>
            {props.children}
        </Context.Provider>
    )
}

export { UserContext as UserProvider, UserConsumer, Context }