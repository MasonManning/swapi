import React from 'react'
const context = React.createContext()
const UserConsumer = context.Consumer

function UserContext(props){
    return(
        <context.Provider>
            {props.children}
        </context.Provider>
    )
}

export {UserContext as UserProvider, UserConsumer}