import React, { useState, useContext } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import UsersPage from './pages/users/users.page';
import NewPlace from './pages/places/NewPlace.page';
import UpdatePlace from './pages/places/UpdatePlace.page';
import MainNavigation from './components/shared/Navigation/MainNavigation';
import UserPlaces from './pages/places/UserPlaces.page';
import AuthPage from './pages/users/Auth.page'
import {AuthContext} from './components/shared/context/Auth.context'
 
const App=()=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const authContext = useContext(AuthContext)
    console.log('***App.js - authContext.isLoggedIn :',authContext.isLoggedIn)
   const login =()=>{
     setIsLoggedIn(true)
   }
   const logout =()=>{
      setIsLoggedIn(false)
  }
  let route=()=>{
    if(isLoggedIn){
    return  <Switch>
        <Route exact path="/" >
            <UsersPage />
        </Route>
        <Route exact path="/:userId/places" >
            <UserPlaces />
        </Route>
        <Route path="/places/new">
            <NewPlace />
        </Route>
        <Route path="/places/:placeId">
            <UpdatePlace />
        </Route>
      <Redirect to="/" />
    </Switch>
    }else{
     return <Switch>
        <Route exact path="/" >
            <UsersPage />
        </Route>
        <Route exact path="/:userId/places" >
            <UserPlaces />
        </Route>
        <Route path="/auth" >
            <AuthPage />
        </Route>
        <Redirect to="/auth" />
     </Switch>
    }
  }
  return (
          <AuthContext.Provider value={{isLoggedIn:isLoggedIn,login:login,logout:logout}}>
           <Router>
             <MainNavigation />
              <main>
                 {route()}
              </main>
           </Router>
        </AuthContext.Provider>  
  );
}

export default App;
