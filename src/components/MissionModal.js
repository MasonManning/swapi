import React, { useState, useContext, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Context } from '../UserContext'
import StarshipItem from './StarshipItem'
function MissionModal(props) {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([])

    const context = useContext(Context)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [minute, second] = props.mission.duration.split(':')
    const handleLaunch = () => {
        selected.forEach(starship => {
            starship.available = false
            context.updateStarship(starship)
        })
        console.log(minute)
        console.log(second)
        console.log(toMilliseconds(minute, second))
        setTimeout(() => {
            let level = context.userData.level
            const missionLevel = props.mission.level
            let sucRate = Math.random() * 10 + 1
            console.log(level)
            console.log(missionLevel)
            console.log(sucRate)
            // Update below to improve odds depending on the starships sent.
            if (level < missionLevel) {
                // sucRate <= 0 ? missionSuccess() : missionFailed()
                // sucRate <= 1 ? missionSuccess() : missionFailed()
                sucRate <= 2 ? missionSuccess() : missionFailed()
            } else if (level == missionLevel) {
                // sucRate <= 0 ? missionSuccess() : missionFailed()
                // sucRate <= 1 ? missionSuccess() : missionFailed()
                sucRate <= 3.5 ? missionSuccess() : missionFailed()
            } else if (level > missionLevel) {
                // sucRate <= 0 ? missionSuccess() : missionFailed()
                // sucRate <= 1 ? missionSuccess() : missionFailed()
                sucRate <= 5 ? missionSuccess() : missionFailed()
            }
        }, toMilliseconds(minute, second))
        setShow(false)
    }
    const missionSuccess = () => {
        console.log("Mission Success")
        selected.forEach(starship => {
            starship.available = true
            context.updateStarship(starship)
        })
        context.addExp(props.mission.exp)
        context.addCredits(props.mission.credits)
    }
    function missionFailed() {
        console.log("Mission Fail")
        selected.forEach(starship => {
            starship.available = true
            context.updateStarship(starship)
            // Random number from 1 to 10
            const rand = Math.floor(Math.random() * 10 + 1)
            console.log("Health Upgrade Level: " + context.userData.healthUpg)
            // 50% chance of a ship being destroyed
            if (rand <= 5) {
                context.removeStarship(starship.id)
            } else {
                starship.health - rand + context.userData.healthUpg * 10 > 0 ?
                    starship.health = calcHealth(rand, starship.health) :
                    starship.health = 1
                context.updateStarship(starship)
            }
        })
    }
    const calcHealth = (rand, health) => {
        const newHealth = (health - (rand * 10)+ (context.userData.healthUpg/2) * 10)   
        return newHealth > 100 ? 100 : newHealth
    }
    // const starshipHandler = (ship) => {
    //     const isSelected = selected.find(starship => starship.id === ship.id)
    //     const f = selected.filter(starship => starship.id != ship.id)
    //     isSelected ? setSelected(f) : setSelected(ps => [...ps, ship])
    // }
    const starshipHandler = (ship) => {
        setSelected(ps => {
            return ps.find(starship => starship.id == ship.id) ? [...ps.filter(starship => starship.id != ship.id)] : [...ps, ship]
        })
    }
    const StarshipSelection = context.userData.starships.map(item => {
        return (
            <StarshipItem starship={item} mission={true} starshipHandler={starshipHandler}></StarshipItem>
        )
    })
    // const selectedStarshipHandler = (ship) => {
    //     setSelected(ps => {
    //         return ps.find(starship => starship.id == ship.id) ? [...ps.filter(starship => starship.id != ship.id)] : [...ps, ship]
    //     })
    // }

    // const StarshipSelection = context.userData.starships.map(item => {
    //     return (
    //         <StarshipItem starship={item} mission={true} selectedStarshipHandler={selectedStarshipHandler} ></StarshipItem>
    //     )
    // })

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Accept Mission
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Starship Selection</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please select starships:
            <br />
                    {StarshipSelection}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleLaunch}>
                        {/* Upon Launching set the a property for the selected ships to inactive in the UserContext.   */}
                        Launch
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
function toMilliseconds(minute, second) {
    return (((minute * 60) + second) * 1000)
}
export default MissionModal