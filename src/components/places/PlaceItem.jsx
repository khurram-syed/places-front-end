import React, { useState, useContext } from 'react'
import './PlaceItem.scss'
import Card from '../shared/UIElements/Card'
import Button from '../shared/FormElements/Button';
import Modal from '../shared/UIElements/Modal';
import Map from '../shared/UIElements/Map'
import {AuthContext} from '../shared/context/Auth.context'

const PlaceItem = (props)=>{
    const {id,title,description, imageUrl,address,creatorId,location} = props.place;
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal,setShowConfirmModal] = useState(false);
    const authContext = useContext(AuthContext)
    
    const openMapHandler =()=> setShowMap(true)
    const closeMapHandler =()=> setShowMap(false)
   
    const showDeleteWarningHandler =()=>{
        setShowConfirmModal(true)
    }

    const confirmDeleteHandler =()=>{
        console.log('DELETED...')
        setShowConfirmModal(false)
    }

    const closeDeleteHandler =()=>{
        setShowConfirmModal(false)
    }
     
    return ( <React.Fragment>
               <Modal show={showMap} 
                      onCancel={closeMapHandler}
                      header={address} 
                      contentClass='place-item__modal-content'
                      footerClass='place-item__modal-actions'
                      footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
                       <div className="map-container">
                          <Map center={location} zoom={16} />
                       </div>
               </Modal>
               <Modal  show={showConfirmModal} 
                       header="Are you sure?" 
                       footerClass="place-item__modal-actions"
                       onCancel={closeDeleteHandler} 
                       footer={<React.Fragment>
                          <Button inverse onClick={closeDeleteHandler}> CANCEL</Button>
                          <Button danger onClick={confirmDeleteHandler}> CONFIRM</Button>
                       </React.Fragment>}
                >
                   <p> Are you sure you want to delete the place? This is irreversible once deleted</p>
               </Modal>
               <li className="place-item">
                 <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={imageUrl} alt={title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{title}</h2>
                        <h3>{address}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                       {authContext.isLoggedIn &&  <Button to={`/places/${id}`}>EDIT</Button> }
                       {authContext.isLoggedIn &&  <Button danger onClick={showDeleteWarningHandler}>DELETE</Button> }
                    </div>
                  </Card> 
               </li>
          </React.Fragment>  
         
   )
}
export default PlaceItem