import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Context } from '../UserContext'
function MissionModal() {
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const context = useContext(Context)
    const selectHandler = (event) => {
       return console.log("Add Starship")
    }
    console.log(context)

    const StarshipSelection = context.userData.starships.map(item => {
        return (<div>
            <h1>{item.name}</h1>
            <button onClick={selectHandler}>Select</button>
        </div>
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