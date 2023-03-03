const { response } = require('express');
const express = require('express');
const router = express.Router();
const userTemplateCopy = require('../models/userModel.js');

router.post('/login', (request, response) => {
	const { userName, userPassword } = request.body;

	//user/userDetail check during integration (remember)
	userTemplateCopy
		.findOne({ userName: userName })
		.then((userDetail) => {
			//if username matches
			if (userDetail) {
				//if username and password matches
				if (userPassword === userDetail.userPassword) {
					response.send({
						message: 'Login successfull',
						userDetail: userDetail,
					});
				} else {
					response.send({ message: "Password didn't match" });
				}
			} else {
				response.send({ message: 'User not registered.' });
			}
		})
		.catch((err) => {
			console.log('error post', err);
		});
});

router.post('/signup', (request, response) => {
	const {
		userFirstName,
		userLastName,
		userName,
		userPassword,
		userPhone,
		userEmailID,
	} = request.body;

	//user/userDetail check during integration (remember)
	//checking if user already exists
	userTemplateCopy
		.findOne({ userEmailID: userEmailID })
		.then((userDetail) => {
			if (userDetail) {
				response.send({ message: 'User already exists.' });
			} else {
				//checking if username already exists
				userTemplateCopy
					.findOne({ userName: userName })
					.then((userDetail) => {
						if (userDetail) {
							response.send({ message: 'Username already exists.' });
						} else {
							const userDetail = new userTemplateCopy({
								userFirstName,
								userLastName,
								userName,
								userPassword,
								userPhone,
								userEmailID,
							});

							userDetail
								.save()
								.then((data) => {
									console.log('Details saved ...');
									response.send({ message: 'Successfully registered.' });
								})
								.catch((err) => console.log(err));
						}
					})
					.catch((err) => {
						console.log('error post', err);
					});
			}
		})
		.catch((err) => {
			console.log('error post', err);
		});
});

module.exports = router;
