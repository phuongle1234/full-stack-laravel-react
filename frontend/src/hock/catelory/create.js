import react from "react"
import { useSelector, useDispatch } from "react-redux";
import { setVariationGlobal } from "../../store/global";
import { apiService } from "../../model/axios";
import { setStage } from "../../store/global";
import { setFromContruct, setFormData } from "../../store/fieldData";
import React from "react";


export const CateloryHock = ( items = {}, intFeatch = true ) => {

    const dispatch = useDispatch()
    
    const api = new apiService()
          api.setDispath( dispatch )

    

    let fields = {
                    name: { val: items?.name ||"" },
                    parent_id: { val: items?.parent_id || null },
                    description: { val: items?.parent_id || "" },
                };
    
    const modal = useSelector((state) => state.global.modalList )


    const catelory = useSelector( (stage) => stage?.global?.catelory ) || {}
    
    const fromFiled = useSelector( (stage) => stage?.filedData?.fromCreateCatelory )
    const { fromLogin, formInfo, validate } = { ...fromFiled,  fromLogin: fromFiled?.fromLogin || {}  }
    
    let listCatelory = useSelector((state) => state.global.listCatelory ) || [];
    
  
    react.useEffect(() => {
      
      dispatch( setFromContruct({ data: fields, filed: 'fromCreateCatelory' }) )

      if(intFeatch)
        fetchCategoris()

    }, [] );

    const fetchCategoris =  async ( isLoadMore = false ) => {

      try {
        const res = await api.get("read-category", { params: { parent_id: 'null' } } )
        dispatch( setVariationGlobal({ data: res?.data, field: 'listCatelory' }) );         
      } catch (error) {
        console.log( { error } );
      }

    }
      
      const handleModal =  ( e ) => {
        const modalId = e.target.getAttribute("data-modal")
        const action = e.target.getAttribute("data-action") || "close"


        switch(action)
        {
          case 'close':
            const res = modal.filter( (res) => (res?.modalId != modalId) )
            dispatch( setStage({ modalList: [ ...res ] }) )
            return true;
          default:
            dispatch( setStage({ modalList: [ { modalId, status: 'opend', props: { items } } ] }) )
            return true;

        }

        
      }
      
      const setFormFiled =  (event ) => {

       
        const { name, value, checked } = event.target

        if( !Object.keys(fields).includes(String( name )) )
            return false
   
        let data = {}
            data[name] = ( ( fields[name] || {} )?.type == 'boolean' ) ? checked : value
        

        dispatch( setFormData({ data, field: 'fromCreateCatelory' }) )

    }
    const isSubmit = ( fromFiled?.name ) || false

    const handleSubmit =  async (e ) => {
       
      e.preventDefault()

      if(!isSubmit)
        return false

      try {
       
        let param = { ...fromFiled }

        if(!param?.parent_id)
          delete param?.parent_id
       
        await api.post("create-category", { ...param  } )

        window.location.reload();

      } catch (error) {
        console.log( { error } );
      }
    }

      const handleUpdate =  async (e ) => {

       e.preventDefault()
        
       if(!isSubmit)
        return false
      
       try {
        
         let param = { ...fromFiled }
 
         if(!param?.parent_id)
           delete param?.parent_id
        
         await api.put(`update-category/${items?.id}`, { ...param  } )
 
         window.location.reload();
 
       } catch (error) {
         console.log( { error } );
       }
 

      //dispatch( setFormData({ data, field: 'fromCreateCatelory' }) )
       
    }

    const handleDelete =  async (e ) => {

      e.preventDefault()
      
      try {
       
        let param = { ...fromFiled }

        if(!param?.parent_id)
          delete param?.parent_id

        await api.delete(`delete-category/${items?.id}`)

        window.location.reload();

      } catch (error) {
        console.log( { error } );
      }


     //dispatch( setFormData({ data, field: 'fromCreateCatelory' }) )
      
   }

   
                    //&& (fromFiled?.description)
  
 return { modal, fromFiled, listCatelory, isSubmit, handleModal, setFormFiled, handleSubmit, handleUpdate, handleDelete };
}