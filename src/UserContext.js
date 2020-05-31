import React, { useState } from 'react'
const Context = React.createContext()
const UserConsumer = Context.Consumer

function UserContext(props) {
    const [captainName, setCaptainName] = useState("")
    const [credits, setCredits] = useState(500000)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [starships, setStarship] = useState([])

    const initSignUp = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
    }

    const deductCredits = (newCredits) => {
        const credLeft = credits - newCredits
        credLeft > 0 && setCredits((credLeft))
        return credLeft > 0 ? true : false
    }
    const addStarship = (newStarship) => {
        setStarship([...starships, newStarship])
        console.log(starships)
    }
    return (
        <Context.Provider value={{
            userData: {captainName: captainName, username: username,
        password: password, credits: credits, starships: starships }, initSignUp: initSignUp,
            deductCredits: deductCredits, addStarship: addStarship,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { UserContext as UserProvider, UserConsumer, Context }