import react from "react"
import { useSelector, useDispatch } from "react-redux";
import { setVariationGlobal } from "../../store/global";
import { apiService } from "../../model/axios";
import { setStage } from "../../store/global";
import React from "react";


export const CateloryHock = () => {


    const dispatch = useDispatch()
    
    const api = new apiService()
          api.setDispath( dispatch )

    

    let fields = {
                    limit: { val: 50 },
                    page: { val: 1 },
                };
    
    const modal = useSelector((state) => state.global.modalList )


    let formCatelory = useSelector((state) => state.global.formCatelory ) || {};
    const catelory = useSelector( (stage) => stage?.global?.catelory ) || {}

    const { current_page, data, last_page, per_page } = { ...catelory, current_page: catelory?.current_page || 1, 
                                                          data: catelory?.data || [], last_page: catelory?.last_page || 1, 
                                                          per_page: catelory?.per_page || 1
                                                        }
    
    const allCatelory = data.reduce( (acc, cur) => {
                          const data = { name: cur?.name, id: cur?.id, parent_id : cur?.parent_id, description: cur?.description };
                          return ( cur?.sub_category?.length ) ? ( [ ...acc, { ...data }, ...cur?.sub_category  ] ) : ( [ ...acc, { ...data } ] )
                      }, [] )

    react.useEffect(() => {

        dispatch( setVariationGlobal({  data: Object.keys(fields).reduce( (cur, key) => Object.assign(cur, { [key]: fields[key]?.val || "" }) , {} ), field: 'formCatelory' }) );
        fetchs()

    }, [] );

    const fetchs =  async ( page = 1 ) => {

            try {

              const res = await api.get("read-category", { params: {page} } )
              const { current_page, data, last_page, per_page } = res?.data
              dispatch( setVariationGlobal({ data: { current_page, data, last_page, per_page }, field: 'catelory' }) ); 

            } catch (error) {
                console.log( { error } );
            }
      }
      
      const opendModal =  ( e ) => {
        const modalId = e.target.getAttribute("data-modal")
        const itemID = e.target.getAttribute("data-itemID")
        
        let props = {}

        if(modalId == "updateCatelory")
          props = { item: allCatelory.find( (res) => (res?.id == Number(itemID) ) ) }

        
        dispatch( setStage({ modalList: [ ...modal, { modalId, status: 'opend', props } ] }) )
      }
      
      const handleChangePage = async (e) => {
        const page = e.target.getAttribute("data-page")
        
        try {
          await fetchs(page)

        } catch (error) {
          console.log( { error } );
        }

      }

   

 return { data, modal, opendModal, current_page, data, last_page, per_page, handleChangePage };
}