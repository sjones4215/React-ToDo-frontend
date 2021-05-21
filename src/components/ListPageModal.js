import React from 'react'
import { Button, Modal } from 'react-bootstrap';
 
export default function HomePageModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          List Page Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}