import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import StarshipItem from "./StarshipItem"
import CaptainContext from "../CaptainContext"
class Starship extends Component {
    constructor() {
        super()
        this.state = {
            starships: [],
            isLoading: true,
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
    componentDidMount() {
        fetch("https://swapi.dev/api/starships/")
            .then(res => res.json())
            .then(data => {
                this.setState(ps => {
                    const list = []
                    return ({
                        starships: data.results,
                        isLoading: false
                    })
                })
            })
    }

    render() {
        const isLoading = this.state.isLoading
        const starshipsItem = this.state.starships.map((ship, index) => {
            return <Col md={4} key={index}> <StarshipItem starship={ship} index={index}></StarshipItem></Col>
        })
        return (
            <div>
                <h1>Welcome Captain {this.context.captainName}</h1>
                <h1>{this.state.isLoading && "IsLoading!!"}</h1>
                <Row>
                    {!this.state.isLoading && starshipsItem}
                </Row>
            </div>
        )
    }
}

Starship.contextType=CaptainContext
export default Starship