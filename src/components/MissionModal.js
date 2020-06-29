import React, { useState, useContext, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Context } from '../UserContext'
import StarshipItem from './StarshipItem'
function MissionModal() {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([])

    const handleClose = () => setShow(false);
    const handleLaunch = () => {
        setShow(false)
        
    }
    const handleShow = () => setShow(true);
    const context = useContext(Context)
    const selectedStarshipHandler = (ship) => {
        setSelected(ps => {
            return ps.find(starship => starship.id == ship.id) ? [...ps.filter(starship => starship.id != ship.id)] : [...ps, ship]
        })
    }

    const StarshipSelection = context.userData.starships.map(item => {
        return (
            <StarshipItem starship={item} mission={true} selectedStarshipHandler={selectedStarshipHandler} ></StarshipItem>
        )
    })

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
                        Launch
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MissionModal