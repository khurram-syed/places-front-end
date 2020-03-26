import React from 'react'
import Card from '../shared/UIElements/Card'
import './PlaceList.scss'
import PlaceItem from './PlaceItem'
import Button from '../shared/FormElements/Button'
const PlaceList = (props)=>{
   
  return(  (props.places.length===0)
      ?  (<div className="place-list center">
            <Card>
                <h2>  No Item Found..!!</h2>
                <Button to='/places/new'>Share Place</Button>
            </Card>
            </div>)
      :  (<ul className="place-list"> 
            {props.places.map(place => (
                    <PlaceItem key={place.id} place={place} />   
               ))
            }  
          </ul>)
  )    
}
export default PlaceList