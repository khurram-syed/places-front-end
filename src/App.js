import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import UsersPage from './pages/users/users.page';
import NewPlace from './pages/places/NewPlace.page';
import UpdatePlace from './pages/places/UpdatePlace.page';
import MainNavigation from './components/shared/Navigation/MainNavigation';
import UserPlaces from './pages/places/UserPlaces.page';

 const App=()=> {
  return (
           <Router>
             <MainNavigation />
              <main>
                  <Switch>
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
              </main>
          </Router>
  );
}

export default App;
