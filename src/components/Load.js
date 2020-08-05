import React from 'react';
import Db from '../StorageManagement'
import { UserConsumer } from '../UserContext'
import StateItem from './StateItem'

function Load(props) {
    return (
        <div>
        <UserConsumer>
            {

                consumer => {
                    let savedList = Db.getInstance().getSaved(consumer.userData.id)
                    return(
                        <div>
                            {savedList && savedList.map((i,index) => <div onClick={(event)=>{
                                consumer.load(i)
                                }}><StateItem data={i} key={i.saveId} index={index}/></div> )}
                        </div>
                    )
                }
            }
        </UserConsumer>
           Load Files Here 
        </div>
    );
}

export default Load;