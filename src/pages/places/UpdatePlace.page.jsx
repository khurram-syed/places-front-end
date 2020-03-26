import React from 'react'
import Input from '../../components/shared/FormElements/Input';
import Button from '../../components/shared/FormElements/Button';

import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../utils/validators'
import {useForm} from '../../components/shared/hooks/form-hook'
import './PlaceForm.scss'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../../components/shared/UIElements/Card';

const PLACES = [{id: 'p1', title: 'London', description: 'BigBen London Westminister',
imageUrl : 'https://res.cloudinary.com/dv4nqc4ci/image/upload/v1584546056/places/Bigban_oxcdl5.jpg', 
address: 'Westminster, London SW1A 0AA'
,creatorId : 'u1'
,location:{lat:51.5007292, lng:-0.1268141}
},
{ id: 'p2', title: 'Paris', description: 'Louvre Museum Paris',
 imageUrl : 'https://res.cloudinary.com/dv4nqc4ci/image/upload/v1584546054/places/LovreMuseum_gibmkc.jpg', 
 address: 'Rue de Rivoli, 75001 Paris, France'
,creatorId : 'u2'
,location:{lat:48.8606111, lng:2.337644}
}]

const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const [isLoading, setIsLoading] = useState(true)
    const [formState,inputHandler,setFormData] = useForm(
        {  
           title:{
              value:'',
              isValid:false
           },
           description:{
            value:'',
            isValid:false
          }
       },
        false
      )
    const identifiedPlace = PLACES.find(p => p.id === placeId);
    useEffect(()=>{
       if(identifiedPlace) 
        setFormData( {  
            title:{
               value:identifiedPlace.title,
               isValid:true
            },
            description:{
             value:identifiedPlace.description,
             isValid:true
           }
        },true)  
         setIsLoading(false) 
    },[setFormData,identifiedPlace])
   
   
    if (!identifiedPlace) {
      return (
        <div className="center">
        <Card >
          <h2>Could not find place!</h2>
          </Card>  
        </div>
      );
    }

    
    const formSubmitHandler =(e)=>{
        e.preventDefault();
        console.log('UpdatePlace - formState :',formState)
    }
    if(isLoading){
        return <div className="center">
            <Card>
               Loading..
            </Card>
        </div>
    }
    return (
      <form className="place-form" onSubmit={formSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={identifiedPlace.title}
          intialValid={formState.inputs.title.isValid || true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={identifiedPlace.description}
          valid={formState.inputs.description.isValid || true}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    );
  };
  
  export default UpdatePlace;
  