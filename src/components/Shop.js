import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default () => {
    const style = { borderStyle: "solid" }
    const show = { display: "block" }
    const hide = { display: "none" }
    const [isCapSelected, setIsCapSelected] = useState(true)
    const handleCaptain = () => {
        setIsCapSelected(ps => true)
    }
    const handleStarship = () => {
        setIsCapSelected(ps => false)
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
                    <Col style={style}><p>Mission Upgrade</p></Col>
                    <Col style={style}><p>levels</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style}><p>Credits Upgrade</p></Col>
                    <Col style={style}><p>levels</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style}><p>Exp Upgrade</p></Col>
                    <Col style={style}><p>levels</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
            </div>
            <div style={!isCapSelected ? show : hide}>
                <Row >
                    <Col style={style}><p>Health Upgrade</p></Col>
                    <Col style={style}><p>levels</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style}><p>Armour Upgrade</p></Col>
                    <Col style={style}><p>levels</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
                <Row >
                    <Col style={style}><p>Exp Upgrade</p></Col>
                    <Col style={style}><p>levels</p></Col>
                    <Col style={style}><p>0%</p></Col>
                </Row>
            </div>
        </div>
    )

}
