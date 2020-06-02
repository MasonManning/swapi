import React from 'react'
import Db from '../StorageManagement'
import {UserConsumer} from '../UserContext'

const Save = () => {
    // Get user Id from the UserContext.
    // Get all of the saved files from localStorage for said Id.
    // Display each saved file in a list.
    // Display an empty save location as well.
    // Implement Save Override.
    // Add Back/Cancel Button
    return (
        <UserConsumer>
            {
                UserData => {
                    console.log(UserData)
                    //Call getSaved from theStorageManagement to get a list of all saved files.
                return <h1>Save Comp: {UserData.username}</h1>
                }
            }
        </UserConsumer>
    )
}
export default Save