import react from "react"
import { CerateDocument } from "../../component/modal/document/create";
import { UpdateDocument } from "../../component/modal/document/update";
import { Link } from "react-router-dom";
import { ComfrimDocument }  from "../../component/modal/document/comfrim";
import { DocumentHock } from "../../hock/document";
import { MainLayout } from "../../layout/main";

function Child({ ...props }) {

  const [ openTag, setOpenTag ] = react.useState( [ ] )

  const { data, modal, opendModal, current_page, last_page, per_page, handleChangePage } = DocumentHock()

  const handlopendTag = (e) => {
      const id = e.target.getAttribute("data-id")
      
      setOpenTag( openTag.includes( Number(id) ) ? openTag.filter( (res) => (res != Number(id)) ) : [ ...openTag, Number(id) ] )
  }
  
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
            {
              data.map( (items, ind) => (
                <tr key={`items-${items?.id}`} >
                  <td>
                    <div className="dflex">
                          <div  className="dflex flexContent" >
                            {
                              (items?.documents?.length > 0)
                              && (
                                <div onClick={handlopendTag} >
                                  <span ><i data-id={items?.id} className={`bi bi-chevron-${openTag.includes( Number(items?.id) ) ? "down" : "up"}`}></i></span>
                                </div>
                              )
                            }
                            
                            <span><i className="bi bi-folder"></i></span>
                            <span>{ items?.name }</span>
                          </div>
                      </div>
                      {
                        ( items?.documents?.length > 0 ) 
                          && (
                              <div className={`sub ${ !openTag.includes( Number(items?.id) ) && "hide" }`}>
                                {
                                  items?.documents.map((doc) => (
                                      <dl key={`doc-${doc?.id}`} >
                                        <dt>{ doc?.name }</dt>
                                        <dd><button type="button" ><i data-modal="updateDocument" data-itemID={doc?.id} onClick={opendModal} className="bi bi-pencil-fill text-primary"></i></button></dd>
                                      </dl>
                                  ))
                                }
                              </div>
                            ) 
                        

                      }
                    

                  </td>
                  {/* <td className="text-end" ><button type="button" className="btn btn-primary">edit</button></td> */}
                </tr>
              ) )
            }
        </tbody>
      </table>
    </>
  );
}

const DocumentPage = (props) => {

  const hock = DocumentHock()
  const { modal, last_page, current_page, handleChangePage, opendModal } = hock

  return (
    <>
     { ( modal?.find( (res) => (res?.modalId == 'createDocument') )?.status || false ) && (<CerateDocument />) }
    { ( modal?.find( (res) => (res?.modalId == 'updateDocument') )?.status || false ) && (<UpdateDocument data={ modal?.find( (res) => (res?.modalId == 'updateDocument') )?.props?.items } />) }
    { ( modal?.find( (res) => (res?.modalId == 'comfrimDocument') )?.status || false ) && (<ComfrimDocument data={ modal?.find( (res) => (res?.modalId == 'comfrimDocument') )?.props?.items } />) }
      <MainLayout 
        title="Documents"
        last_page={last_page} 
        current_page={current_page}
        Header={(<>
                    <div className="col-sm-6 text-start"><Link relative="path" to={`/document-category`}>Document Category</Link></div>
                    <div className="col-sm-6"> <button type="button" data-modal="createDocument" onClick={opendModal} className="btn btn-primary btnS">+ NEW DOCUMENT </button> </div>
                </>)}
        handleChangePage={handleChangePage}
      >
          <Child {...props} hock={hock} />
      </MainLayout>
    </>
  );
};

export default DocumentPage;
