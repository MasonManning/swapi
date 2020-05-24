import React from "react"
import {withRouter} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = (event) => {
        // Check if there is a username and password match in localStorage.
        // If match, redirect to home. 
        // If not, stay on this page and display error message.
        console.log(this.state.username)
        event.preventDefault()
        this.props.history.push("/")
    }
    handleChange = (event) => {
        const {name, value } = event.target
        console.log(name)
        this.setState(ps => ({[name] : value }))
    }
    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} name="username" onChange={this.handleChange} />
                <input type="text" value={this.state.password} name="password" onChange={this.handleChange} />
                <button type="submit" value="Submit">Submit</button>
            </form>
        )
    }
}
export default withRouter(Login)