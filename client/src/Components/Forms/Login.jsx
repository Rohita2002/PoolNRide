import React, { Fragment } from 'react';
import { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Basic/NavigationBar';
import axios from 'axios';

function Login() {
	const initialLoginDetails = {
		userName: '',
		userPassword: '',
	};

	const [loginDetails, setLoginDetails] = useState(initialLoginDetails);

	const handleFormChange = (evt) => {
		const { id, value } = evt.target;

		setLoginDetails((userDetails) => ({
			...userDetails,
			[id]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(loginDetails);

		axios
			.post('http://localhost:4000/api/login', loginDetails)
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
					<label for="userName" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						value={loginDetails.userName}
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
						value={loginDetails.userPassword}
						onChange={(evt) => handleFormChange(evt)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Login
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

export default Login;
