import React from 'react'
import { UserConsumer } from '../UserContext'
import StarshipItem from './StarshipItem'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Hangar = (props) => {
    return (
        <div>
            <h1>Welcome To The Hanger Captain</h1>
            <UserConsumer>
                {
                    v => (
                        <div>
                            <h3>Credits: {v.userData.credits}</h3>
                            <Row>
                                {v.userData.starships.map((starship, index) => 
                                {return <Col md={4} key={index}> <StarshipItem starship={starship} /><button onClick={(event) => {v.addCredits(starship.cost_in_credits)
                                    v.removeStarship(starship.id)
                                    console.log(starship)
                                }}>Sell</button></Col> })}
                            </Row>
                        </div>
                    )
                }
            </UserConsumer>
        </div>
    )
}

export default Hangar