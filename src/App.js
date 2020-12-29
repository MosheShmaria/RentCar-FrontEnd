import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
// import '../bootstrap-4.3.1-dist/css/bootstrap.min.css';
import Home from './pages/home';
import AddCar from './pages/add-car';
import GetCar from './pages/get-car';
import ReturnCar from './pages/return-car';
import SubmitDeatels from './pages/submit-deatels';
import Header from './components/header'
import './app.css'

function App() {
  return (
    <div className="App">
      <Router> 
         <Header />
         <Route path="/" exact component={Home} />
         <Route path="/add-car" exact component={AddCar} />
         <Route path="/get-car" exact component={GetCar} />
        
      
     <Route path="/return-car" exact component={ReturnCar} />
      <Route path="/submit-deatels" exact component={SubmitDeatels} />
      </Router>
     </div>
)}

export default App;
