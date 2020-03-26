import React from 'react'
import PlaceList from '../../components/places/PlaceList';
import {useParams} from 'react-router-dom'

const UserPlaces = (props)=>{
    
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
   }
  ]; 
   const PLACES1 =[];
  console.log('params :',useParams())
   const userId = useParams().userId;
   return  <div> 
          <PlaceList places={PLACES.filter(place=>place.creatorId===userId)} />
     </div>
}
export default UserPlaces