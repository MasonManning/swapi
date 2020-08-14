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
            showNext: false,
            showPrevious: false
        }
        this.handleCptChange = this.handleCptChange.bind(this)
        this.handleCptSubmit = this.handleCptSubmit.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
        this.targetNext = createRef()
        this.targetPrevious = createRef()
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
                    data.next|| setTimeout(() => { this.setState({ showNext: false }) }, 1000)
                    this.setState(ps => {
                        return ({
                            starships: data.results,
                            isLoading: false,
                            previous: data.previous ? data.previous : '',
                            next: data.next ? data.next : '',
                            showNext: data.next ? false: true 
                        })
                    })
                })
        }else{

            this.setState({showNext: true})
            setTimeout(() => { this.setState({ showNext: false }) }, 1000)
        }
    }
    handlePrevious(event) {
        if (this.state.previous) {
            fetch(this.state.previous)
                .then(res => res.json())
                .then(data => {
                    data.previous || setTimeout(() => { this.setState({ showPrevious: false }) }, 1000)
                    this.setState(ps => {
                        const list = []
                        console.log(data)
                        data.previous ? console.log("there is a previous") : console.log("Previous is null")
                        data.previous || console.log("No Previous!!!!")
                        // console.log(data.previous)
                        // data.previous || setTimeout(() => {this.setState({showPrevious: false})}, 1000)
                        return ({
                            starships: data.results,
                            isLoading: false,
                            previous: data.previous ? data.previous : '',
                            next: data.next ? data.next : '',
                            showPrevious: data.previous ? false : true,

                        })
                    })
                })
        } else {
            this.setState({showPrevious: true})
            setTimeout(() => { this.setState({ showPrevious: false }) }, 1000)
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
                <Button onClick={this.handleNext} ref={this.targetNext}>Next</Button>
                <Overlay target={this.targetNext.current} show={this.state.showNext} placement="top">
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
                            No More Starships Next
                        </div>
                    )}
                </Overlay>
                <Button onClick={this.handlePrevious} ref={this.targetPrevious}>Previous</Button>
                <Overlay target={this.targetPrevious.current} show={this.state.showPrevious} placement="top">
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
                            No More Starships Previous
                        </div>
                    )}
                </Overlay>
            </div>
        )
    }
}

Starship.contextType = CaptainContext
export default Starship