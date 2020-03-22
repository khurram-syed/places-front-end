import React, { useReducer, useCallback } from 'react'
import Input from '../../components/shared/FormElements/Input';
import Button from '../../components/shared/FormElements/Button';

import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../utils/validators'

import './PlaceForm.scss'

const formReducer = (state,action)=>{
  switch(action.type){
  
   case 'INPUT_CHANGE':
      let formIsValid=true;
      for(const inputId in state.inputs){
         if(inputId===action.inputId){
            formIsValid = formIsValid && action.isValid
         }else{
            formIsValid = formIsValid && state.inputs[inputId].isValid;
         }
      }   
   return { ...state,
       inputs:{...state.inputs,
          [action.inputId]:{value:action.value, isValid:action.isValid }  
       },
       isValid: formIsValid              
      }
   default :
       return state;
 }
} 

const NewPlace = ()=>{
   const [formState,dispatch] = useReducer(formReducer,{
      inputs:{
         title:{
           value:'',
           isValid:false
        },
        description:{
         value:'',
         isValid:false
       }, 
       address: {
         value: '',
         isValid: false
       }
     },
      isValid:false
   })

   /* This will use the callback to get the useEffect changes in input and assign the 
      back here from  
   */
   const inputHandler=useCallback((id,value,isValid)=>{
      dispatch({
         type:'INPUT_CHANGE',
         value: value,
         isValid:isValid,
         inputId: id
      })
   },[])
  
   const formSubmitHandler=(e)=>{
      e.preventDefault();
      console.log(formState.inputs)
   }
  return   <form className="place-form" onSubmit={formSubmitHandler}> 
        <Input id="title" type="text" 
               element="input"
               onInput={inputHandler}   //<<== point to be noted.
               validators={[VALIDATOR_REQUIRE()]} 
               placeholder={`please enter title here..`}
               label='Title' />
     
       <Input id="description" 
              element="textarea"
              onInput={inputHandler} //<<== point to be noted.
              validators={[VALIDATOR_MINLENGTH(5)]} 
              placeholder={`please enter description here (at least 5 characters)..`} 
              label='Description'/>    
      <Input id="address" 
              element="input"
              onInput={inputHandler} //<<== point to be noted.
              validators={[VALIDATOR_REQUIRE()]} 
              placeholder={`please enter address here..`} 
              label='Address'/>    
       
      <Button disabled={!formState.isValid}>Submit</Button>                   
     </form>
}
export default NewPlace