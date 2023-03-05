const express = require('express');
const router = express.Router();
const userTemplateCopy = require('../models/userModel.js');

router.post('/signin', (request, response) => {
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
						message: 'Signin successfull',
						userDetail: userDetail,
					});
				} else {
					response.send({ message: "Incorrect credentials." });
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

// Define a route for updating a user's vehicle details
router.put('/update-vehicle', async (req, res) => {
  try {
    // Get the user ID and vehicle details from the request body
    const { userId, isVehicle, vehicleType, vehicleName, registrationNumber, licenseId } = req.body;

    // Find the user by ID in the database
    const user = await userTemplateCopy.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's vehicle details in the database
    user.isVehicle = isVehicle;
    user.vehicleType = vehicleType;
    user.vehicleName = vehicleName;
    user.registrationNumber = registrationNumber;
    user.licenseId = licenseId;
    await user.save();

    // Respond with a success message and the updated user object
    res.json({ message: 'Vehicle details updated successfully', user });
  } catch (error) {
    // Handle any errors that occur during the vehicle update process
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define a route for deleting a user
router.delete('/delete-user/:id', async (req, res) => {
  try {
    // Get the user ID from the request parameters
    const userId = req.params.id;

    // Find the user by ID in the database
    const user = await userTemplateCopy.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user from the database
    await user.remove();

    // Respond with a success message
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    // Handle any errors that occur during the user deletion process
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Export the router
module.exports = router;

