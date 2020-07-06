import React from 'react'
import MissionModal from './MissionModal'

function BattlefieldItem(props) {
    return (
        <div>

            <h1>Mission Type: {props.item.missionType}</h1>
            <h2>Name: {props.item.name}</h2>
            <h2>Level: {props.item.level}</h2>
            <h2>Duration: {props.item.duration}</h2>
            <h2>Difficulty: {props.item.color}</h2>
            <MissionModal mission={props.item}/>
        </div>)
}

export default BattlefieldItem 