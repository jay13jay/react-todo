import { useState } from "react";

import MyModal from "./MyModal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [showModal, setShowModal] = useState(false);

    function deleteHandler() {
        setShowModal(true);
    }

    function closeModalHandler() {
        setShowModal(false);
    }


    return (
        
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
            </div>
            { showModal ? <MyModal show={showModal} onCancel={closeModalHandler} /> : null }
            { showModal ? <Backdrop onCancel={closeModalHandler} /> : null }
        </div>

    )
}

export default Todo;