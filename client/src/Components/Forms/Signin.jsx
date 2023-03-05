import React, { Fragment } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IntroNavigationBar from '../Basic/IntroNavigationBar';
import axios from 'axios';

function Signin() {
	const initialSigninDetails = {
		userName: '',
		userPassword: '',
	};

	const [SigninDetails, setSigninDetails] = useState(initialSigninDetails);
	const navigate=useNavigate(); //used for routing

	const handleFormChange = (evt) => {
		const { id, value } = evt.target;

		setSigninDetails((userDetails) => ({
			...userDetails,
			[id]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(SigninDetails);

		//checking if the user is admin
		if(SigninDetails.userName==='admin@12' && SigninDetails.userPassword==='Admin@12'){
			navigate("/admin");
		}

		else{
			axios
			.post('http://localhost:4000/api/signin', SigninDetails)
			.then((data) => {
				console.log('post resolved');
				console.log(data);
				const message = data.data.message;

				if(message==='Signin successfull'){
					navigate("/homeusers");
				}
				else{
					alert(message);
				}
			})
			.catch((err) => {
				console.log('error is ', err);
			});
		}
		
	};

	return (
		//IntroNavigation bar containing signup-signin buttons
		<Fragment>
			<IntroNavigationBar />
			<form
				className="container justify-content-center"
				onSubmit={handleSubmit}
			>
				<div className="col-md-3">
					<label for="userName" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						value={SigninDetails.userName}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>

				<div className="col-md-3">
					<label for="userPassword" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="userPassword"
						value={SigninDetails.userPassword}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Signin
				</button>
				<div className="mb-3">
					<label for="notUser">
						Don't have an account?<a href="/signup">Sign up</a>
					</label>
				</div>
			</form>
		</Fragment>
	);
}

export default Signin;
