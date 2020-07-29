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
    // User Upgrades
    const [maxMissionLvl, setMaxMissionLvl] = useState(0)
    const [missionNum, setMissionNum] = useState(0)
    const [creditsUpg, setCreditsUpg] = useState(0)
    const [expUpg, setExpUpg] = useState(0)
    // Starship Upgrades
    const [armourUpg, setArmourUpg] = useState(0)

    const initSignUp = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
        setCaptainName(userData.captainName)
        setId(userData.id)
        setCredits(500000)
        setStarship([])
        setLevel(1)
        setExp(0)
        // Initialize Upgrades
        setMaxMissionLvl(0)
        setMissionNum(0)
        setCreditsUpg(0)
        setExpUpg(0)
        setArmourUpg(0)
    }
    const login = (userData) => {
        setUsername(userData.username)
        setPassword(userData.password)
        setCaptainName(userData.captainName)
        setId(userData.id)
        if (userData.save.length > 0) {
            const save = userData.save
            setCredits(save[save.length - 1].credits)
            setStarship(save[save.length - 1].starships)
            setLevel(save[save.length - 1].level)
            setExp(save[save.length - 1].exp)
            setMaxMissionLvl(save[save.length - 1].maxMissionLvl)
            setMissionNum(save[save.length - 1].missionNum)
            setCreditsUpg(save[save.length - 1].creditsUpg)
            setExpUpg(save[save.length - 1].expUpg)
            setArmourUpg(save[save.length - 1].armourUpg)
        } else {
            setCredits(500000)
            setStarship([])
            setLevel(1)
            setExp(0)
            // Initialize Upgrades
            setMaxMissionLvl(0)
            setMissionNum(0)
            setCreditsUpg(0)
            setExpUpg(0)
            setArmourUpg(0)
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
        (level * level * 10) > (exp + expInc) ? setExp(ps => (ps + expInc)) : levelUp()
    }
    const getExpForLevel = () => {
        return (level * level * 10)
    }
    const getPerNextLvl = () => {
        return exp / getExpForLevel() * 100
    }
    function levelUp() {
        setExp(0)
        setLevel(ps => (ps + 1))
    }
    const upgradeMaxMissionLevel = () => {
        maxMissionLvl < 10 && setMaxMissionLvl(ps => ps + 1)
    }
    const upgradeMissionNum = () => {
        missionNum < 10 && setMissionNum(ps => (ps + 1))
    }
    const upgradeCredits = () => {
        creditsUpg < 10 && setCreditsUpg(ps => ps + 1)
    }
    const upgradeExp = () => {
        expUpg < 10 && setExpUpg(ps => ps + 1)
    }
    const upgradeArmour = () => {
        armourUpg < 10 && setArmourUpg(ps => ps + 1)
    }
    return (
        <Context.Provider value={{
            userData: {
                captainName: captainName, username: username,
                password: password, credits: credits, starships: starships,
                id: id, level: level, exp: exp, maxMissionLvl: maxMissionLvl,
                missionNum: missionNum, creditsUpg: creditsUpg, expUpg: expUpg,
                armourUpg: armourUpg
            }, initSignUp: initSignUp,
            deductCredits: deductCredits, addStarship: addStarship, load: load,
            addCredits: addCredits, removeStarship: removeStarship,
            updateStarship: updateStarship, login: login, addExp: addExp,
            getExpForLevel: getExpForLevel, getPerNextLvl: getPerNextLvl,
            upgradeMaxMissionLevel: upgradeMaxMissionLevel, upgradeMissionNum,
            upgradeCredits: upgradeCredits, upgradeExp: upgradeExp, 
            upgradeArmour: upgradeArmour,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { UserContext as UserProvider, UserConsumer, Context }