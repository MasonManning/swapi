import React from 'react'
import { UserConsumer } from '../UserContext'
import StarshipItem from './StarshipItem'
const Hangar = (props) => {
    return (
        <div>
            <h1>Welcome To The Hanger Captain</h1>
            <UserConsumer>
                {
                    v => (
                        <div>
                        <h3>Credits: {v.userData.credits}</h3>
                        {v.userData.starships.map(starship => (<StarshipItem starship={starship}/>))}
                        </div>
                    )
                }
            </UserConsumer>
        </div>
    )
}

export default Hangar