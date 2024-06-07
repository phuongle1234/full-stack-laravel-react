
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CateloryHock } from '../../../hock/catelory/create';
// closeButton
export const CerateCatelory = ({ ...props }) => {
    
    const {  handleModal, setFormFiled, fromFiled, listCatelory, handleSubmit, isSubmit } = CateloryHock()
    

     return ( 
        <Modal {...props} size="lg"
        show={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">Add Document Category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form disabled={!isSubmit} onSubmit={handleSubmit} >
                
                <div className="form-group">
                    <select name="parent_id" className='form-control' onChange={setFormFiled} >
                        <option value="" > Subgroup of </option>
                        {
                            listCatelory?.map( (res) => (<option selected={ (fromFiled?.parent_id == res?.id) }  key={`option-p-${res?.id}`} value={res?.id}> { res?.name } </option>) )
                        }
                        
                    </select>
                </div>

                <div className="form-group">
                    <input type="text" name='name' placeholder='Title*' maxLength={50} value={fromFiled?.name} className="form-control" onChange={setFormFiled}  />
                </div>

                <div className="form-group">
                    <textarea name="description" placeholder='description' maxLength={150} value={fromFiled?.description} className='form-control' onChange={setFormFiled} ></textarea>
                </div>

            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button data-modal="createCatelory" data-action="close" variant="outline-primary" onClick={handleModal}>CANCEL</Button>
          <Button disabled={!isSubmit} onClick={handleSubmit} >CONFIRM</Button>
        </Modal.Footer>
      </Modal>
    )

   
}