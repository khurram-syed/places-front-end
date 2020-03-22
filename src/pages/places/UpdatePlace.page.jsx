import React from 'react'
import Input from '../../components/shared/FormElements/Input';
import Button from '../../components/shared/FormElements/Button';

import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../utils/validators'

import './PlaceForm.scss'
import { useParams } from 'react-router-dom';

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
  
    const identifiedPlace = PLACES.find(p => p.id === placeId);
  
    if (!identifiedPlace) {
      return (
        <div className="center">
          <h2>Could not find place!</h2>
        </div>
      );
    }
  
    return (
      <form className="place-form">
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={() => {}}
          value={identifiedPlace.title}
          valid={true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={() => {}}
          value={identifiedPlace.description}
          valid={true}
        />
        <Button type="submit" disabled={true}>
          UPDATE PLACE
        </Button>
      </form>
    );
  };
  
  export default UpdatePlace;
  