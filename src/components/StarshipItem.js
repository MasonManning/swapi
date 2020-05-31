import React, {useContext} from "react"
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import {Context as UserContext} from '../UserContext'
function Starships(props) {
    const color = props.index%2 == 0 ? "#DDDDDD" : "#D4D5DB"
    const userContext = useContext(UserContext)
    const userData = userContext.getUserData()
    const canBuy = userData.credits > props.starship.cost_in_credits
    const handleBuy = (event) => {
        const isBought = userContext.deductCredits(props.starship.cost_in_credits)
        isBought && userContext.addStarship(props.starship)
    }
    return (
        <div style={{backgroundColor: color}} >
            <h1 style={{color: "#747474"}}>{props.starship.name}</h1>
            <hr/>
            <h2>Cost In Credits: {props.starship.cost_in_credits}</h2>
            <h2>Essential Crew: {props.starship.crew}</h2>
            <h2>Passenger Capacity: {props.starship.passengers}</h2>
            <h2>Length: {props.starship.length}</h2>
            <h2>Maximum Megalights Per Hour: {props.starship.MGLT}</h2>
            <button onClick={handleBuy} disabled={!canBuy}>Buy</button>
        </div>
    )
}
Starships.propTypes = {
    starship: PropTypes.object.isRequired
}
export default Starships