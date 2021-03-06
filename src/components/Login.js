import React from "react"
import { withRouter } from 'react-router-dom'
import Db from '../StorageManagement'
import { Context } from '../UserContext'
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
        if (!login.error) {
            this.props.updateAuth(true)
            const save = Db.getInstance().getSaved(login.userData.id)
            this.context.login({
                username: this.state.username, password: this.state.password,
                id: login.userData.id, captainName: login.userData.captainName,
                save: save
            })
        }
        // GetSaved
        event.preventDefault()
        this.props.history.push("/")
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState(ps => ({ [name]: value }))
    }
    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} placeholder="Username" name="username" onChange={this.handleChange} />
                <input type="text" value={this.state.password} placeholder="Password" name="password" onChange={this.handleChange} />
                <button type="submit" value="Submit">Submit</button>
            </form>
        )
    }
}
Login.contextType = Context
export default withRouter(Login)