import { Navigate,  useLocation } from 'react-router-dom';
import { CartState } from '../../Context/Context';
import { useState } from 'react';

// import Shipment from '../Shipment/Shipment';

const PrivateRoute = ({ children,...rest }) => {
    const [userExist, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInfo");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      
//   const {loggedInUser,setLoggedInUser}=CartState()
  let location = useLocation();


  if (!userExist.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }else{
    

    return children;
  }


};

export default PrivateRoute;