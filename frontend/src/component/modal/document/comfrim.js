
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { CateloryHock } from '../../../hock/catelory/create';
import { DocumentModalHock } from '../../../hock/document/modal';
// closeButton
export const ComfrimDocument = ({ ...props }) => {
  
    const {  handleModal, setFormFiled, fromFiled, listCatelory, handleSubmit, handleUpdate, handleDelete } = DocumentModalHock( { ...props?.data }, false )
            //closeButton
     return ( 
      <Modal show={true} 
      // onHide={handleClose}
      >
        <Modal.Header >
          <Modal.Title>Delete document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you wish to delete this document ? <br/>
          <span className='text-primary'> <strong>{ props?.data?.name }</strong></span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" data-modal="comfrimDocument" onClick={handleModal}>CANCEL</Button>
          <Button variant="primary" data-modal="comfrimCatelory" onClick={handleDelete}> CONFIRM </Button>
        </Modal.Footer>
      </Modal>
    )

   
}