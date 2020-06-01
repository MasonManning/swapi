import React from "react"
import {withRouter} from 'react-router-dom'
import Db from '../StorageManagement'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    handleSubmit = (event) => {
        const login = Db.getInstance().Login(this.state.username, this.state.password)
        console.log(this.state.username)
        !login.error && this.props.updateAuth(true)
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