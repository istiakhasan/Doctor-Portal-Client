
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'

import Home from './components/Home/Home/Home';

import Appointmentpage from './components/Appointmentpage/Appointmentpage/Appointmentpage';
import Login from './components/Login/Login';
import Dashoard from './components/Dashboard/Dashboard/Dashoard';

import AllPaitents from './components/Dashboard/AllPatients/AllPaitents.jsx'
import AddDoctors from './components/Dashboard/AddDoctors/AddDoctors';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointmentpage />} />
      
        <Route path="/dashboard/patients" element={<AllPaitents />} />    
        <Route path="/dashboard/doctor" element={<AddDoctors />} />
         
        <Route
         path="/dashboard/appointsments"
         element={
          <PrivateRoute>
            <Dashoard />
          </PrivateRoute>
        }
        />  
           
        <Route path="/login" element={<Login />} /> 
        
      </Routes>
      
    </Router>
  );
}

export default App;
