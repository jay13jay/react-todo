import { useState } from "react";

import MyModal from "./MyModal";
import Backdrop from "./Backdrop";
import { Button, Card } from "react-bootstrap";

function Todo(props) {
    const [showModal, setShowModal] = useState(false);

    function deleteHandler() {
        setShowModal(true);
    }

    function closeModalHandler() {
        setShowModal(false);
    }


    return (
        
        // <div className="card">
        <Card>
            <Card.Title>{props.title}</Card.Title>
            {/* <div className="actions"> */}
            <Card.Body>
                {props.text}
            </Card.Body>
            <Card.Footer className="actions">
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
            </Card.Footer>
            { showModal ? <MyModal show={showModal} onCancel={closeModalHandler} /> : null }
            { showModal ? <Backdrop onCancel={closeModalHandler} /> : null }
        </Card>

    )
}

export default Todo;