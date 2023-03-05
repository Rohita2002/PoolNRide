import React, { Fragment } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IntroNavigationBar from '../Basic/IntroNavigationBar';
import axios from 'axios';

function SignUp() {
	const initialUserDetails = {
		userFirstName: '',
		userLastName: '',
		userEmailID: '',
		userPhone: '',
		userName: '',
		userPassword: '',
		confirmPassword: '',
	};
	const [userDetails, setUserDetails] = useState(initialUserDetails);
	const navigate=useNavigate();

	const handleFormChange = (evt) => {
		const { id, value } = evt.target;

		setUserDetails((userDetails) => ({
			...userDetails,
			[id]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(userDetails);

		if(userDetails.userPassword!==userDetails.confirmPassword){
			alert("Please re-enter the correct password");
		}
		else{
			axios
			.post('http://localhost:4000/api/signup', userDetails)
			.then((data) => {
				console.log('post resolved');
				console.log(data);
				const message = data.data.message;
				//alert(message);

				if(message==='Successfully registered.'){
					//window.location.href='/signin'; //also working
					navigate("/signin");
				}
			})
			.catch((err) => {
				console.log('error is ', err);
			});
		}
	};

	return (
		<Fragment>
			<IntroNavigationBar />

			<form
				className="container justify-content-center"
				onSubmit={handleSubmit}
			>
				<div className="col-md-3">
					<label for="userFirstName" className="form-label">
						First name
					</label>
					<input
						type="text"
						className="form-control"
						id="userFirstName"
						value={userDetails.userFirstName}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
				<div className="col-md-3">
					<label for="userLastName" className="form-label">
						Last name
					</label>
					<input
						type="text"
						className="form-control"
						id="userLastName"
						value={userDetails.userLastName}
						onChange={(evt) => handleFormChange(evt)}
					/>
				</div>
				<div className="col-md-3">
					<label for="userEmailID" className="form-label">
						Email ID
					</label>
					<input
						type="email"
						className="form-control"
						id="userEmailID"
						value={userDetails.userEmailID}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
					<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="col-md-3">
					<label for="userPhone" className="form-label">
						Phone Number
					</label>
					<input
						type="tel"
						className="form-control"
						id="userPhone"
						pattern='[7,8,9][0-9]{9}'
						value={userDetails.userPhone}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
				<div className="col-md-3">
					<label for="userName" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						value={userDetails.userName}
						pattern='^[A-Za-z][A-Za-z0-9_]{6,28}$'
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
          			
						<div id="passwordHelpBlock" class="form-text">
						**User name must start with letter,may contain numbers, letters, _ and 7-29 characters
						</div>
            		
          		

				<div className="col-md-3">
					<label for="userPassword" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$%^&?]).{8,32}$"
						id="userPassword"
						value={userDetails.userPassword}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
				<div id="passwordHelpBlock" class="form-text">
				**Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character: @$%^&?
						</div>
				<div className="col-md-3">
					<label for="confirmPassword" className="form-label">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control"
						id="confirmPassword"
						value={userDetails.confirmPassword}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
				<a href="/signup/vehicle_registration">
					<button
						type="submit"
						className="btn btn-primary"
						onClick={(evt) => handleFormChange(evt)}
					>
						Register
					</button>
				</a>
			</form>
		</Fragment>
	);
}

export default SignUp;
