import React from 'react'
import { UserConsumer } from '../UserContext'
const Hangar = () => {
    return (
        <div>
            <h1>Welcome To The Hanger Captain</h1>
            <UserConsumer>
                {
                    v => (
                        <h3>Credits: {v.userData.credits}</h3>
                    )
                }
            </UserConsumer>
        </div>
    )
}

export default Hangar