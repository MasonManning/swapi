import React, { Component } from 'react'
import CaptainContext from '../CaptainContext'
import Db from '../StorageManagement'

class Home extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>
        <h1>Home</h1>
            </div>
        )
    }
}
Home.contextType = CaptainContext
export default Home