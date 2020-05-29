import React from 'react'
import { UserConsumer } from '../UserContext'
const Hangar = () => {
    return (
        <div>
            <h1>Welcome To The Hanger</h1>
            <UserConsumer>
                {
                    v => (
                    <h1>{v}</h1>
                    )
                }
            </UserConsumer>
        </div>
    )
}

export default Hangar