import React, { useState } from 'react'
const Context = React.createContext()
const UserConsumer = Context.Consumer

function UserContext(props) {
    const [captainName, setCaptainName] = useState("")
    const [credits, setCredits] = useState()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [starships, setStarship] = useState([])
    const [id, setId] = useState("")

    const initSignUp = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
        setId(userData.id)
        setCredits(500000)
        // setCredits(userData.credits)
    }


    const deductCredits = (newCredits) => {
        const credLeft = credits - newCredits
        credLeft > 0 && setCredits((credLeft))
        return credLeft > 0 ? true : false
    }
    const addStarship = (newStarship) => {
        setStarship([...starships, newStarship])
    }
    const load = (save) => {
        setCredits(save.credits)
        setStarship(save.starships)
    }
    return (
        <Context.Provider value={{
            userData: {captainName: captainName, username: username,
        password: password, credits: credits, starships: starships, id, id }, initSignUp: initSignUp,
            deductCredits: deductCredits, addStarship: addStarship, load: load,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { UserContext as UserProvider, UserConsumer, Context }