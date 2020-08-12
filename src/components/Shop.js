import React, { useState, useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Context } from '../UserContext'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

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
            <Row className='justify-content-md-center'>
                <ButtonGroup>
                    <Button onClick={handleCaptain}>Captain</Button>
                    <Button onClick={handleStarship}>Starship</Button>
                </ButtonGroup>
            </Row>
            <div style={isCapSelected ? show : hide}>
                <Row >
                    <Col md={3}><Button onClick={handleMissionLvl} variant='success' style={{ width: "100%" }}>Mission Lvl Upgrade</Button></Col>
                    <Col md={6} className="align-bottom"><Alert variant='success' style={{padding: "0", margin: "0"}}><p>Level: {context.userData.maxMissionLvl}</p></Alert></Col>
                    <Col ><p>0%</p></Col>
                </Row>
                <Row >
                    <Col md={3}><Button onClick={handleMissionNum} variant='success' style={{ width: "100%" }}>Mission # Upgrade</Button></Col>
                    <Col md={6} className="align-bottom"><Alert variant='success' style={{padding: "0", margin: "0"}}><p>Level: {context.userData.missionNum}</p></Alert></Col>
                    <Col ><p>0%</p></Col>
                </Row>
                <Row >
                    <Col md={3}><Button onClick={handleCreditsUpg} variant='success' style={{ width: "100%" }}>Credits Upgrade</Button></Col>
                    <Col md={6} className="align-bottom"><Alert variant='success' style={{padding: "0", margin: "0"}}><p>Level: {context.userData.creditsUpg}</p></Alert></Col>
                    <Col ><p>0%</p></Col>
                </Row>
                <Row >
                    <Col md={3} ><Button onClick={handleExpUpg} style={{ width: "100%" }} variant='success'>Exp Upgrade</Button></Col>
                    <Col md={6} ><Alert variant='success' style={{padding: "0", margin: "0"}}><p>Level: {context.userData.expUpg}</p></Alert></Col>
                    <Col ><p>0%</p></Col>
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
