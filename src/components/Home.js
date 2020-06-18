import React, { Component } from 'react'
import CaptainContext from '../CaptainContext'
import Db from '../StorageManagement'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            captainName: ""
        }
        // this.handleCptChange = this.handleCptChange.bind(this)
        // this.handleCptSubmit = this.handleCptSubmit.bind(this)
    }
    // handleCptChange(event) {
    //     this.setState({ captainName: event.target.value })
    // }
    // handleCptSubmit(event) {
    //     alert("Welcome Captain " + this.state.captainName)
    //     this.context.setCaptainName(this.state.captainName)
    //     Db.getInstance().setCaptainName("1", this.state.captainName)
    //     event.preventDefault()
    // }
    render() {
        return(<h1>Home</h1>)
        // return (
            // <CaptainContext.Provider value={"Test Captain Context"}>
            //     <form onSubmit={this.handleCptSubmit}>
            //         <input type="text" value={this.state.captainName} placeholder="Captain Name" onChange={this.handleCptChange} />
            //         <br />
            //         <input type="submit" value="Submit" />
            //     </form>
            // </CaptainContext.Provider>
        // )
    }
}
Home.contextType = CaptainContext
export default Home