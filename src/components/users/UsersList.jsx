import React from 'react'

import UserItem from './UserItem'
import Card from '../shared/UIElements/Card'

import './UsersList.scss'

const UsersList = (props)=>{
  
  return(  (props.items.length===0)
      ?  (<Card> No Item Found..!!</Card>)
      :  (<ul className="users-list"> 
            {props.items.map(user => (
                    <UserItem key={user.id} user={user} />   
               ))
            }  
          </ul>)
  )    
}
export default UsersList