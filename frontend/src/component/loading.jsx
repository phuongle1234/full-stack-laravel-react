import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-bootstrap/Modal';

export const Loading = ({ ...props }) => {

    //const dispatch = useDispatch()
    const { isLoading } = useSelector( (stage) => stage?.global )


    if(isLoading)
     return ( 
        <Modal show={true} contentClassName="modalLoading" centered  >
            <Modal.Body>
                    <div className="loader"></div>
            </Modal.Body>
        </Modal>
    )

    return(<></>)
}


