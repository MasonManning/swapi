import React, {useState} from 'react'
import {Button, Modal} from 'react-bootstrap'
function MissionModal(){
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Starship Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please select starships:</Modal.Body>
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