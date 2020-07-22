import React, {useContext} from 'react'
import BattlefieldItem from './BattlefieldItem'
import {Context} from '../UserContext'
import ExpProgress from './ExpProgress'

function Mission() {
    const context = useContext(Context)
    const MAX_MISSION_NUMBER = 4 + context.userData.missionNum
    const MIN_MISSION_NUMBER = 1 + context.userData.missionNum
    const NUMBER_OF_MISSIONS = randomNumber(MIN_MISSION_NUMBER, MAX_MISSION_NUMBER)
    const LOWER_LEVEL = context.userData.level - 5 > 0 ? context.userData.level - 5 : 1
    const UPPER_LEVEL = context.userData.level + context.userData.maxMissionLvl + 5
    let Mission = []
    generateMissions()
    return (
        <div>
            <h1>Select A Mission</h1>
            <ExpProgress />
            {Mission.map((item, index) => <BattlefieldItem key={index} item={item} />)}
        </div>
    )
    function generateMissions() {
        for (let i = 0; i < NUMBER_OF_MISSIONS; i++) {
            const missionLevel = randomNumber(LOWER_LEVEL, UPPER_LEVEL)
            let sectorName = genSectorName(5)
            Mission.push({
                missionType: "Battlefield",
                name: sectorName,
                level: missionLevel,
                // duration: generateDuration(missionLevel),
                duration: "0:03",
                credits: generateCredits(missionLevel), 
                exp: generateExp(missionLevel),
                color: "Determine from player level",
            })
        }
        console.log(Mission)
    }
}
function generateDuration(missionLevel) {
    let d = missionLevel * 10 * (randomNumber(missionLevel, missionLevel+5))
    let sec = d % 60
    let minute = Math.floor(d / 60)
    console.log("sec: " + sec + " minute : " + minute)
    d = minute + ":" + sec
    console.log(d)
    return d
}
function generateExp(missionLevel){
    // TODO:: Add some randomness to the EXP generation process
    return missionLevel * missionLevel
}
function generateCredits(missionLevel){
    const credits = missionLevel * 2000 * (randomNumber(missionLevel, missionLevel+5))
    return credits
}

const randomNumber = (low, high) => {
    const min = Math.ceil(low)
    const max = Math.floor(high)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const genSectorName = (len) => {
    let sectorName = 'Sector-'
    for (let i = 0; i < len; i++) {
        sectorName += Math.floor(Math.random() * 10)
    }
    return sectorName
}

export default Mission