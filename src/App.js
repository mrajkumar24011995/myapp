// import './App.css';
import { useState } from 'react';
import Base from './Base/Base';
import AuthPage from './Components/AuthPage';
import DashBoard from './components/DashBoard';
import { StudentDetails } from './Components/students';

function App() {
  return (
    <div className="App">

   <Switch>

    <Route exact path = "/">
           <h1>Welcome to our App</h1>
    </Route>


   </Switch>

      </div>
  );
}

  

export default App;
