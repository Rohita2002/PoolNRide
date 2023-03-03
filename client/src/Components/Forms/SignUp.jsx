import React, { Fragment } from 'react';
import { useState } from 'react';
import NavigationBar from '../Basic/NavigationBar';
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

		axios
			.post('http://localhost:4000/api/signup', userDetails)
			.then((data) => {
				console.log('post resolved');
				console.log(data);
				const message = data.data.message;
				alert(message);
				//work on handling different messages received
			})
			.catch((err) => {
				console.log('error is ', err);
			});
	};

	return (
		<Fragment>
			<NavigationBar />

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
						type="text"
						className="form-control"
						id="userEmailID"
						value={userDetails.userEmailID}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
				<div className="col-md-3">
					<label for="userPhone" className="form-label">
						Phone Number
					</label>
					<input
						type="text"
						className="form-control"
						id="userPhone"
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
						value={userDetails.userPassword}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
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
