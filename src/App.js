import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Habit from './Habit'
import Home from './Home'
import Navbar from './Navbar'
import CreateHabit from './CreateHabit'
import Journal from './Journal'
import JournalDetails from './JournalDetails'
import CreateJournal from './CreateJournal'
import UpdateJournal from './UpdateJournal'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'
import User from './User'
import EditHabit from './EditHabit'
// import Axios from 'axios'
// import {useState} from 'react'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/register'><Register /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/logout'><Logout /></Route>
          <Route path='/user'><User /></Route>
          <Route path ='/create'><CreateHabit /></Route>
          <Route path ='/habits'><Habit /></Route>
          <Route path ='/edit-habit/:id'><EditHabit /></Route>
          <Route path ='/journal'><Journal /></Route>
          <Route path ='/entries/:id'><JournalDetails /></Route>
          <Route path ='/add-entry'><CreateJournal /></Route>
          <Route path ='/update-entry/:id'><UpdateJournal /></Route>
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
