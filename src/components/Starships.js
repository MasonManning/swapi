import React from "react"
import Button from 'react-bootstrap/Button'
function Starships(props) {
    const color = props.index%2 == 0 ? "#DDDDDD" : "#D4D5DB"
    return (
        <div style={{backgroundColor: color}} >
            <h1 style={{color: "#747474"}}>{props.starship.name}</h1>
            <hr/>
            <h2>Cost In Credits: {props.starship.cost_in_credits}</h2>
            <h2>Essential Crew: {props.starship.crew}</h2>
            <h2>Passenger Capacity: {props.starship.passengers}</h2>
            <h2>Length: {props.starship.length}</h2>
            <h2>Maximum Megalights Per Hour: {props.starship.MGLT}</h2>
        </div>
    )
}

export default Starships