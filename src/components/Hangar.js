import React, {useContext} from 'react'
import { UserConsumer } from '../UserContext'
import StarshipItem from './StarshipItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Context} from '../UserContext'
const Hangar = (props) => {
    const context = useContext(Context)
    return (
        <div>
            <UserConsumer>
                {
                    v => (
                        <div>
                            <h1>Welcome To The Hanger Captain {v.userData.captainName}</h1>
                    <h3>Level: {context.userData.level}</h3>
                            <h3>Credits: {v.userData.credits}</h3>
                            <Row>
                                {v.userData.starships.map((starship, index) => {
                                    return <Col md={4} key={index}> <StarshipItem starship={starship} /><button onClick={(event) => {
                                        v.addCredits(starship.cost_in_credits)
                                        v.removeStarship(starship.id)
                                    }}>Sell</button></Col>
                                })}
                            </Row>
                        </div>
                    )
                }
            </UserConsumer>
        </div>
    )
}

export default Hangar