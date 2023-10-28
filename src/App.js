import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Consulting from './components/pages/Consulting';
import Marketing from './components/pages/Marketing';
import Development from './components/pages/Development';
import Plans from './components/pages/Plans';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Design from './components/pages/Design';
import Contact from './components/pages/Contact';
import PlanOptions from './components/PlanOptions';


function App() {
  return (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path='/home' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/design' exact component={Design} />
        <Route path='/development' exact component={Development} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/plans' exact component={Plans} />
        <Route path='/services' exact component={Services} />
        <Route path='/signUp' exact component={SignUp} />
      </Routes>
    </Router>

      <h1 className='title'>Flexible Payment Options</h1>
      <h2 className='titleTwo'>Choose the plan that meets your needs</h2>
      <br></br>
      <div className='price-row'>
        <p>Annually</p>
        <label className='price-switch'>
          <input className='price-checkbox' type='checkbox' />
          <div className='switch-slider'></div>
        </label>
        <p>Monthly</p>
        </div>
    
      <br></br>
      <div className='App'>
      <PlanOptions planType="Basic Plan" description="Good for Start" price="$300" 
      coreFeatures=
      <ul>
      <li> Upgrades to new kiosk </li>
      <li> Symptoms check for visitors </li>
      <li> Email support </li>
      </ul> 
      installationFeatures= <ul>
      <li> Self install </li>
      <li> Remote Installation </li>
      </ul>
      supportFeatures= <ul>
      <li> Installation Manual </li>
      <li> User Manual </li>
      </ul>
      />
      <PlanOptions planType="Standard Plan" description="Plan for Advance" price="$500" coreFeatures=
      <ul>
      <li> Abnormal Temperature Notifications </li>
      <li> Reporting on single device </li>
      <li> Facial recognition </li>
      </ul> 
      installationFeatures= <ul>
      <li> Professional Install </li>
      <li> Training on software </li>
      </ul> 
      />
      <PlanOptions planType="Premium Plan" description="Full Feature Set" price="$700" nextPlan="All features in Basic Plan" coreFeatures= 
      <ul>
      <li> Notifications if someone skips the kiosk </li>
      <li> Security gate integration </li>
      <li> Mobile App notification </li>
      </ul> 
      />
      </div>
    </div>
  );
}

export default App;
