
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { DocumentModalHock } from '../../../hock/document/modal';
// closeButton
export const CerateDocument = ({ ...props }) => {
    
    const {  handleModal, setFormFiled, fromFiled, listCatelory, handleSubmit, isSubmit } = DocumentModalHock()
    

     return ( 
        <Modal {...props} size="lg"
        show={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // data-modal="createDocument"
        // onHide={handleModal}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Add Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form  disabled={!isSubmit} onSubmit={handleSubmit}  >
              <div className="form-group">
                <div className="row">
                  
                      <div className="col-md-6">
                          <input type="text" name='name' placeholder='Document name*' maxLength={50} value={fromFiled?.name} className="form-control" onChange={setFormFiled}  />
                      </div>

                      <div className="col-md-6">
                          <select name="category_id" className='form-control' onChange={setFormFiled} >
                              <option disabled selected > Document catelory </option>
                              {
                                  listCatelory?.map( (res) => (<option selected={ (fromFiled?.category_id == res?.id) }  key={`option-p-${res?.id}`} value={res?.id}> { res?.name } </option>) )
                              }
                              
                          </select>
                      </div>

                  </div>
                </div>
                <div className="form-group col-md-12">
                      <textarea name="description" placeholder='Description' maxLength={150} value={fromFiled?.description} className='form-control' onChange={setFormFiled} ></textarea>
                  </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button data-modal="createDocument" data-action="close" variant="outline-primary" onClick={handleModal}>CANCEL</Button>
          <Button disabled={!isSubmit} onClick={handleSubmit} >CONFIRM</Button>
        </Modal.Footer>
      </Modal>
    )

   
}