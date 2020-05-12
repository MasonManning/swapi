import React from "react"

function Starships(props) {

    return (
        <div>
            <h1>Name: {props.starship.name}</h1>
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