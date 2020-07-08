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
    const [level, setLevel] = useState("")

    const initSignUp = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
        setCaptainName(userData.captainName)
        setId(userData.id)
        setCredits(500000)
        // setCredits(userData.credits)
    }
    const login = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
        setCaptainName(userData.captainName)
        setId(userData.id)
        if (userData.save.length > 0) {
            const save = userData.save
            console.log("SAVE>>>>>>>")
            console.log(save)
            setCredits(save[save.length - 1].credits)
            setStarship(save[save.length - 1].starships)
        } else {
            console.log("Save was NULL")
            setCredits(500000)
            setStarship([])
        }
    }

    const deductCredits = (newCredits) => {
        const credLeft = credits - newCredits
        credLeft > 0 && setCredits((credLeft))
        return credLeft > 0 ? true : false
    }
    const addCredits = (c) => {
        setCredits(((credits + parseInt(c))))
        return true
    }
    const addStarship = (newStarship) => {
        setStarship([...starships, newStarship])
    }
    const removeStarship = (id) => {
        setStarship(starships.filter(s => s.id != id))
    }
    const updateStarship = (newStarship) => {
        console.log(starships)
        console.log("update Starship")
        setStarship(ps => ps.map(starship => starship.id == newStarship.id ? newStarship : starship))
        console.log(starships)
    }
    const load = (save) => {
        setCredits(save.credits)
        setStarship(save.starships)
    }
    return (
        <Context.Provider value={{
            userData: {
                captainName: captainName, username: username,
                password: password, credits: credits, starships: starships, id, id
            }, initSignUp: initSignUp,
            deductCredits: deductCredits, addStarship: addStarship, load: load, addCredits: addCredits,
            removeStarship: removeStarship, updateStarship: updateStarship, login: login,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { UserContext as UserProvider, UserConsumer, Context }