import React from 'react'
import UsersList from '../../components/users/UsersList'
const UsersPage = ()=>{
    const Users = [{id: 'u1', name: 'James', 
                    image : 'https://res.cloudinary.com/dv4nqc4ci/image/upload/v1584546053/places/RiverBoats_l0agfh.jpg', 
                    places : 3  
                },
                {id: 'u2', name: 'Max', 
                    image : 'https://res.cloudinary.com/dv4nqc4ci/image/upload/v1584543567/places/pikwizard_uxc94l.jpg', 
                    places : 1  
                }
             ];
//    const Users =[]
   return <div> 
              <UsersList items={Users}/>
          </div>
   }
export default UsersPage