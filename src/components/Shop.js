import React, { useState, useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from '../UserContext'

export default () => {
    const style = { borderStyle: "solid" }
    const show = { display: "block" }
    const hide = { display: "none" }
    const context = useContext(Context)
    const [isCapSelected, setIsCapSelected] = useState(true)
    const handleCaptain = () => {
        setIsCapSelected(ps => true)
    }
    const handleStarship = () => {
        setIsCapSelected(ps => false)
    }
    const handleMissionLvl = (event) => {
        console.log("Mission Num")
        console.log(context.userData.maxMissionLvl)
        context.upgradeMaxMissionLevel()
    }
    const handleMissionNum = () => {
        console.log(context.userData.missionNum)
        context.upgradeMissionNum()
    }
    const handleCreditsUpg = () => {
        context.upgradeCredits()
    }
    const handleExpUpg = () => {
        context.upgradeExp()
    }
    const handleArmourUpg = () => {
        context.upgradeArmour()
    }
    const handleHealthUpg = () => {
        context.upgradeHealth()
    }
    const handleStarshipExpUpg = () => {
        context.upgradeStarshipExp()
    }
    return (
        <div>
            <h1>Welcome Traveler</h1>
            <Row >
                <Col style={style} onClick={handleCaptain}>Captain</Col>
                <Col style={style} onClick={handleStarship}>Starship</Col>
            </Row>
            <div style={isCapSelected ? show : hide}>
                <Row >
                    <Col style={style} onClick={handleMissionLvl} ><p>Mission Lvl Upgrade</p></Col>
                    <Col style={style}><p>Level: {context.userData.maxMissionLvl}</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style} onClick={handleMissionNum}><p>Mission # Upgrade</p></Col>
                    <Col style={style}><p>Level: {context.userData.missionNum}</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style} onClick={handleCreditsUpg}><p>Credits Upgrade</p></Col>
                    <Col style={style}><p>Level: {context.userData.creditsUpg}</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style} onClick={handleExpUpg}><p>Exp Upgrade</p></Col>
                    <Col style={style} ><p>Level: {context.userData.expUpg}</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
            </div>
            <div style={!isCapSelected ? show : hide}>
                <Row >
                    <Col style={style} onClick={handleHealthUpg}><p>Health Upgrade</p></Col>
                    <Col style={style}><p>Level: {context.userData.healthUpg}</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style} onClick={handleArmourUpg}><p>Armour Upgrade</p></Col>
                    <Col style={style}><p>Level: {context.userData.armourUpg}</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style} onClick={handleStarshipExpUpg}><p>Exp Upgrade</p></Col>
                    <Col style={style}><p>Level: {context.userData.starshipExpUpg}</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
            </div>
        </div>
    )

}
