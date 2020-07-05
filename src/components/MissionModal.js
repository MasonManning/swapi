import React, { useState, useContext, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Context } from '../UserContext'
import StarshipItem from './StarshipItem'
function MissionModal() {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([])

    const context = useContext(Context)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLaunch = () => {
        // Set UserContext staarship.available not the MissonModal selected.starship.available
        selected.forEach(starship => {
            starship.available = false
            context.updateStarship(starship)})
        setTimeout(() => {
        selected.forEach(starship => {
            starship.available = true 
            context.updateStarship(starship)})
        }, 10000)
        setShow(false)
    }
    const starshipHandler = (ship) => {
        const isSelected = selected.find(starship => starship.id === ship.id)
        const f = selected.filter(starship => starship.id != ship.id)
        isSelected ? setSelected(f) : setSelected(ps => [...ps, ship])
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
                        {/* Upon Launching set the a perperty for the selected ships to inactive in the UserContext.   */}
                        Launch
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MissionModal