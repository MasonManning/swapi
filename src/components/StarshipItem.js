import React, { useContext, useState } from "react"
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'
import { Context as UserContext } from '../UserContext'
import { v4 as uuidv4 } from 'uuid'
import ProgressBar from 'react-bootstrap/ProgressBar'
function Starships(props) {
    const [selected, setSelected] = useState(false)
    const color = props.index % 2 == 0 ? "#DDDDDD" : "#D4D5DB"
    const userContext = useContext(UserContext)
    const canBuy = userContext.userData.credits > props.starship.cost_in_credits
    const selectStyle = selected ? "red" : "black"
    const handleBuy = (event) => {
        const isBought = userContext.deductCredits(props.starship.cost_in_credits)
        const starship = { ...props.starship }
        starship.available = true
        starship.id = uuidv4()
        starship.health = 100
        // TODO:: Change armour depending on what starship is bought. **************************************************************
        starship.armour = 0
        isBought && userContext.addStarship(starship)
    }
    const HandleMission = (event) => {
        if (!props.starship.available) {
            return;
        }
        setSelected(ps => !ps)
        props.starshipHandler(props.starship)
    }
    // I'm not too sure if this is bad practise? Maybe I should create a MissionItem Component to hold the below code.
    const mission = <div onClick={HandleMission} style={props.starship.available ? { color: selectStyle } : { color: 'grey' }}>
        <h1>Name: {props.starship.name}</h1>
        <h2>Health: {props.starship.health}</h2>
        <ProgressBar now={props.starship.health} label={props.starship.health} />
    </div>
    return (
        <div>
            {props.mission ? mission :
                <div style={{ backgroundColor: color }} >
                    <Alert variant='success'>
                        <Alert.Heading>
                            <h1>{props.starship.name}</h1>
                            {props.starship.name}
                        </Alert.Heading>
                        {/* <h1 style={{ color: "#747474" }}>{props.starship.name}</h1> */}
                        <hr />
                        <p>Cost In Credits: {props.starship.cost_in_credits}</p>
                        <p>Health: {props.starship.health}</p>
                        <p>Essential Crew: {props.starship.crew}</p>
                        <p>Passenger Capacity: {props.starship.passengers}</p>
                        <p>Length: {props.starship.length}</p>
                        <p>Maximum Megalights Per Hour: {props.starship.MGLT}</p>

                        {/* <h2>Cost In Credits: {props.starship.cost_in_credits}</h2>
                        <h2>Health: {props.starship.health}</h2>
                        <h2>Essential Crew: {props.starship.crew}</h2>
                        <h2>Passenger Capacity: {props.starship.passengers}</h2>
                        <h2>Length: {props.starship.length}</h2>
                        <h2>Maximum Megalights Per Hour: {props.starship.MGLT}</h2> */}
                        <button onClick={handleBuy} disabled={!canBuy}>Buy</button>
                    </Alert>
                </div>
            }
        </div>

    )
}
Starships.propTypes = {
    starship: PropTypes.object.isRequired
}
export default Starships