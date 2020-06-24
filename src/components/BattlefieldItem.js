import React from 'react'

function BattlefieldItem(props) {
    return (
        <div>

            <h1>Mission Type: {props.item.missionType}</h1>
            <h2>Name: {props.item.name}</h2>
            <h2>Level: {props.item.level}</h2>
            <h2>Difficulty: {props.item.color}</h2>
        </div>)
}

export default BattlefieldItem 