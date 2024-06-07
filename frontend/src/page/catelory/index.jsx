import react from "react"
import { CateloryHock } from "../../hock/catelory";
import { CerateCatelory } from "../../component/modal/catelory/create";
import { UpdateCatelory } from "../../component/modal/catelory/update";
import { ComfrimCatelory } from "../../component/modal/catelory/comfrim";
import { MainLayout } from "../../layout/main";
import { Link } from "react-router-dom";

function Child({ ...props }) {

  const [ openTag, setOpenTag ] = react.useState( [ ] )

  const { data, modal, opendModal, current_page, last_page, per_page, handleChangePage } = props?.hock

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
                                (items?.sub_category?.length > 0)
                                && (
                                  <div onClick={handlopendTag} >
                                    <span ><i data-id={items?.id} className={`bi bi-chevron-${openTag.includes( Number(items?.id) ) ? "down" : "up"}`}></i></span>
                                  </div>
                                )
                              }
                              
                              <span><i className="bi bi-folder"></i></span>
                              <span>{ items?.name }</span>
                            </div>
                            <button type="button"><i data-modal="updateCatelory" data-itemID={items?.id} onClick={opendModal} className="bi bi-pencil-fill text-primary"></i></button>
                        </div>
                        {
                          ( items?.sub_category?.length > 0 ) 
                            && (
                                <div className={`sub ${ !openTag.includes( Number(items?.id) ) && "hide" }`}>
                                  {
                                    items?.sub_category.map((sub) => (
                                        <dl key={`sub-${sub?.id}`} >
                                          <dt>{ sub?.name }</dt>
                                          <dd><button type="button" ><i data-modal="updateCatelory" data-itemID={sub?.id} onClick={opendModal} className="bi bi-pencil-fill text-primary"></i></button></dd>
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

const CateloryPage = (props) => {

  const hock = CateloryHock()
  const { modal, last_page, current_page, handleChangePage, opendModal } = hock

  return (
    <>
      { ( modal?.find( (res) => (res?.modalId == 'createCatelory') )?.status || false ) && (<CerateCatelory />) }
      { ( modal?.find( (res) => (res?.modalId == 'updateCatelory') )?.status || false ) && (<UpdateCatelory data={ modal?.find( (res) => (res?.modalId == 'updateCatelory') )?.props?.item } />) }
      { ( modal?.find( (res) => (res?.modalId == 'comfrimCatelory') )?.status || false ) && (<ComfrimCatelory data={ modal?.find( (res) => (res?.modalId == 'comfrimCatelory') )?.props?.items } />) }
      <MainLayout 
        title="Document categories"
        last_page={last_page} 
        current_page={current_page}
        Header={(<>
                    <div className="col-sm-6 text-start"><Link relative="path" to={`/document`}>Document</Link></div>
                    <div className="col-sm-6"> <button type="button" data-modal="createCatelory" onClick={opendModal} className="btn btn-primary btnS">+ NEW DOCUMENT CATEGORY </button> </div>
                </>)}
        handleChangePage={handleChangePage}
      >
          <Child {...props} hock={hock} />
      </MainLayout>
    </>
  );
};

export default CateloryPage;
