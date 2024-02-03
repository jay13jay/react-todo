import { Modal, Button } from "react-bootstrap";

function MyModal(props) {
    return (
        // <Modal show={props.show} onHide={handleClose}>
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button> */}
                <Button variant="success">Save</Button>
                <Button variant="warning" onClick={props.onCancel}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
  
  export default MyModal;
  