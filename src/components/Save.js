import React from 'react'
import Db from '../StorageManagement'
import { UserConsumer } from '../UserContext'
import StateItem from './StateItem'
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
                consumer => {
                    //Call getSaved from theStorageManagement to get a list of all saved files.
                    let savedList = Db.getInstance().getSaved(consumer.userData.id)
                    return (
                        <div>
                            {savedList && console.log("Display Saved Items by maping over the savedList and outputting the StyateItem component")}
                            {savedList && savedList.map((i,index) => <StateItem data={i} key={i.saveId} index={index}/> )}
                            {savedList && console.log(savedList)}

                            <div onClick={(e) => {
                                const hasSaved = Db.getInstance().newSave(consumer.userData)
                                hasSaved && savedList.push(<StateItem data={hasSaved} key={hasSaved.saveId} index={savedList.length+1} />)

                            }} style={{ height: "150px" }}><h1>NEW SAVE</h1></div>
                            <h1>Save Comp: {consumer.userData.username}</h1>
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}
export default Save