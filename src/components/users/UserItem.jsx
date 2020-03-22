import React from 'react'
import Avatar from '../shared/UIElements/Avatar'
import './UserItem.scss'
import {Link} from 'react-router-dom'
import Card from '../shared/UIElements/Card'
const UserItem = (props)=>{
    const {id,name,image,places} = props.user;
     return ( 
               <li className="user-item">
                 <Card className="user-item__content">
                  <Link to={`/${id}/places`}   >
                    <div className="user-item__image">
                        <Avatar image={image} alt={name} />
                    </div>
                    <div className="user-item__info">
                        <h2>{name}</h2>
                        <h3>{places} {places===1?`place`:`places`}</h3>
                    </div>
                 </Link>   
                </Card>
            </li>
         
   )
}
export default UserItem