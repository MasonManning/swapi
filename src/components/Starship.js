import React, { Component, createRef } from 'react'
import './Starship.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import StarshipItem from "./StarshipItem"
import CaptainContext from "../CaptainContext"
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import { Tooltip } from 'react-bootstrap'
class Starship extends Component {
    constructor() {
        super()
        this.state = {
            starships: [],
            isLoading: true,
            next: "",
            previous: "",
            show: false
        }
        this.handleCptChange = this.handleCptChange.bind(this)
        this.handleCptSubmit = this.handleCptSubmit.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
        this.target = createRef()
    }
    handleCptChange(event) {
        this.setState({ captainName: event.target.value })
    }
    handleCptSubmit(event) {
        alert("Welcome Captain " + this.state.captainName)
        event.preventDefault()
    }
    handleNext(event) {
        if (this.state.next) {
            fetch(this.state.next)
                .then(res => res.json())
                .then(data => {
                    this.setState(ps => {
                        const list = []
                        console.log(data)
                        data.previous ? console.log("there is a previous") : console.log("Previous is null")
                        data.next || console.log("No Next!!!!")
                        return ({
                            starships: data.results,
                            isLoading: false,
                            previous: data.previous ? data.previous : '',
                            next: data.next ? data.next : ''
                        })
                    })
                })
        }
    }
    handlePrevious(event) {
        if (this.state.previous) {
            fetch("https://swapi.dev/api/starships/")
                .then(res => res.json())
                .then(data => {
                    this.setState(ps => {
                        const list = []
                        console.log(data)
                        data.previous ? console.log("there is a previous") : console.log("Previous is null")
                        data.previous || console.log("No Previous!!!!")
                        // console.log(data.previous)
                        return ({
                            starships: data.results,
                            isLoading: false,
                            previous: data.previous ? data.previous : '',
                            next: data.next ? data.next : '',
                            show: data.previous ? false : true
                        })
                    })
                })
        }
    }
    componentDidMount() {
        fetch("https://swapi.dev/api/starships/")
            .then(res => res.json())
            .then(data => {
                this.setState(ps => {
                    const list = []
                    console.log(data)
                    data.previous ? console.log("there is a previous") : console.log("Previous is null")
                    // console.log(data.previous)
                    return ({
                        starships: data.results,
                        isLoading: false,
                        previous: data.previous ? data.previous : '',
                        next: data.next ? data.next : ''
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
                <Button onClick={this.handleNext} ref={this.target}>Next</Button>
                <Overlay ref={this.target.current} show={this.state.show} placement="right">
                    {({ placement, arrowProps, show: _show, popper, ...props }) => (
                        <div
                            {...props}
                            style={{
                                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                padding: '2px 10px',
                                color: 'white',
                                borderRadius: 3,
                                ...props.style,
                            }}
                        >
                            Simple tooltip
                        </div>
                    )}
                </Overlay>
                <Button onClick={this.handlePrevious}>Previous</Button>
            </div>
        )
    }
}

Starship.contextType = CaptainContext
export default Starship