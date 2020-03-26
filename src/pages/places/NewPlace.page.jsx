import React from 'react'
import Input from '../../components/shared/FormElements/Input';
import Button from '../../components/shared/FormElements/Button';

import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../utils/validators'
import {useForm} from '../../components/shared/hooks/form-hook'
import './PlaceForm.scss'



const NewPlace = ()=>{

   const [formState,inputHandler] = useForm(
     {  
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
    }
   ,
     false
   )
  
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
               label='Title' 
               errorText="Please enter a valid title."
               />
     
       <Input id="description" 
              element="textarea"
              onInput={inputHandler} //<<== point to be noted.
              validators={[VALIDATOR_MINLENGTH(5)]} 
              placeholder={`please enter description here (at least 5 characters)..`} 
              label='Description'
              errorText="Please enter a valid description (at least 5 characters)."
              />    
      <Input id="address" 
              element="input"
              onInput={inputHandler} //<<== point to be noted.
              validators={[VALIDATOR_REQUIRE()]} 
              placeholder={`please enter address here..`} 
              label='Address'
              errorText="Please enter a valid address."
              />    
       
      <Button disabled={!formState.isValid}>
         ADD PLACE
      </Button>                   
     </form>
}
export default NewPlace