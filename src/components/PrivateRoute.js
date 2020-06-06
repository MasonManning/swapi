import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
    return (
        <Route {...rest}>
            {rest.isAuthenticated ? 
            children : 
            <Redirect to="/"/>
            }
        </Route>
    )
}

export default PrivateRoute