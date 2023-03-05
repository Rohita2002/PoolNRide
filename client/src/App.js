import { Route, Routes } from 'react-router-dom';
import Intro from './Components/Forms/Intro'; //importing introduction page
import Signin from './Components/Forms/Signin'; //importing signin page
import SignUp from './Components/Forms/SignUp'; //importing signup page
import HomeUsers from './Components/Forms/HomeUsers'; //importing users home page
import EditProfile from './Components/Forms/EditProfile'; //importing profile editing page
import VehicleRegistration from './Components/Forms/VehicleRegistration'; //importing editing profile:vehicle registration page
import Admin from './Components/Forms/Admin';

//start point
function App() {
	
	return (
		//defining all routes
		<div>
			<Routes>
				<Route path={'/'} element={<Intro />} />
				<Route path={'/signin'} element={<Signin />} />
				<Route path={'/signup'} element={<SignUp />} />
				<Route path={'/homeusers'} element={<HomeUsers />} />
				<Route path={'/editprofile'} element={<EditProfile />}/>
				<Route path={'/vehicle_registration'} element={<VehicleRegistration />} />
				<Route path={'/admin'} element={<Admin />} />
			</Routes>
		</div>
	);
}

export default App;
