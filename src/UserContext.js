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
    const [level, setLevel] = useState()
    const [exp, setExp] = useState()

    const initSignUp = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
        setCaptainName(userData.captainName)
        setId(userData.id)
        setCredits(500000)
        setStarship([])
        setLevel(1)
        setExp(58)
        // setCredits(userData.credits)
    }
    const login = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
        setCaptainName(userData.captainName)
        setId(userData.id)
        if (userData.save.length > 0) {
            const save = userData.save
            console.log(save)
            setCredits(save[save.length - 1].credits)
            setStarship(save[save.length - 1].starships)
            setLevel(save[save.length - 1].level)
            console.log("actual level in UserContext: " + level)
            console.log("Login Save Objec: ")
            console.log(save[save.length - 1].level)
            console.log("LOgin level : " + save[save.length - 1].level)
            setExp(save[save.length - 1].exp)
            // Set User Level
        } else {
            setCredits(500000)
            setStarship([])
            setLevel(1)
            setExp(0)
            // Clear UserLevel to 1
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
        setStarship(ps => ps.map(starship => starship.id == newStarship.id ? newStarship : starship))
    }
    const load = (save) => {
        setCredits(save.credits)
        setStarship(save.starships)
    }
    const addExp = (expInc) => {
        (level * level * 10) > (exp + expInc) ? setExp(ps => (ps+expInc)) : levelUp()
    }
    function levelUp(){
        setExp(0)
        setLevel(ps => (ps+1))
    }
    return (
        <Context.Provider value={{
            userData: {
                captainName: captainName, username: username,
                password: password, credits: credits, starships: starships, 
                id: id, level: level, exp: exp,
            }, initSignUp: initSignUp,
            deductCredits: deductCredits, addStarship: addStarship, load: load,
            addCredits: addCredits, removeStarship: removeStarship, 
            updateStarship: updateStarship, login: login, addExp: addExp
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { UserContext as UserProvider, UserConsumer, Context }