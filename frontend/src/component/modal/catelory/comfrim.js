
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CateloryHock } from '../../../hock/catelory/create';
// closeButton
export const ComfrimCatelory = ({ ...props }) => {
    
    const {  handleModal, setFormFiled, fromFiled, listCatelory, handleSubmit, handleUpdate, handleDelete } = CateloryHock( { ...props?.data }, false )
            //closeButton
     return ( 
      <Modal show={true} 
      // onHide={handleClose}
      >
        <Modal.Header >
          <Modal.Title>Delete document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you wish to delete this document Catelory? <br/>
          <span className='text-primary'> <strong>{ props?.data?.name }</strong></span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" data-modal="comfrimCatelory" onClick={handleModal}>CANCEL</Button>
          <Button variant="primary" data-modal="comfrimCatelory" onClick={handleDelete}> CONFIRM </Button>
        </Modal.Footer>
      </Modal>
    )

   
}