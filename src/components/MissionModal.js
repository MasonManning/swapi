import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Context } from '../UserContext'
import StarshipItem from './StarshipItem'
function MissionModal() {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const context = useContext(Context)
    const starshipHandler = (ship) => {
        const isSelected = selected.find(starship => starship.id === ship.id)
        const f = selected.filter(starship => starship.id != ship.id)
        isSelected ? setSelected(f) : setSelected(ps => [...ps, ship])
    }
    const StarshipSelection = context.userData.starships.map(item => {
        return(
            <StarshipItem starship={item} mission={true} starshipHandler={starshipHandler}></StarshipItem>
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
                    <Button variant="primary" onClick={handleClose}>
                        Launch
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default MissionModal