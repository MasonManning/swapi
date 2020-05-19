import React, { Component } from 'react'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            captainName: ""
        }
        this.handleCptChange = this.handleCptChange.bind(this)
        this.handleCptSubmit = this.handleCptSubmit.bind(this)
    }
    handleCptChange(event) {
        this.setState({ captainName: event.target.value })
    }
    handleCptSubmit(event) {
        alert("Welcome Captain " + this.state.captainName)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleCptSubmit}>
                <input type="text" value={this.state.captainName} placeholder="Captain Name" onChange={this.handleCptChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Home