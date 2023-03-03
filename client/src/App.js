import { Route, Routes } from 'react-router-dom';
import Login from './Components/Forms/Login';
import SignUp from './Components/Forms/SignUp';
import VehicleRegistration from './Components/Forms/VehicleRegistration';

function App() {
  
  // const [path, setPath] = useState("/");
  // const homePath = "/";
  return (
    <div>
      <Routes>
        <Route path = { "/login" } element={<Login/>}/>
        <Route path = { "/signup"} element={<SignUp/>}/>
        <Route path = { "/signup/vehicle_registration"} element={<VehicleRegistration/>}/>
      </Routes>
    </div>
  );
}

export default App;
