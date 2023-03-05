import React, { useState } from 'react';

const VehicleRegistration = () => {
	const [hasVehicle, setHasVehicle] = useState(false);
	const [vehicleType, setVehicleType] = useState('');
	const [vehicleregno, setVehicleRegNum] = useState('');
	const [vehiclename, setVehicleName] = useState('');
	const [userlicenseid, setUserLicenseID] = useState('');
	const [username, setUsername] = useState('');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [emailid, setEmailID] = useState('');
	const [phonenumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');

	const handleHasVehicleChange = (event) => {
		setHasVehicle(event.target.value === 'yes');
	};

	const handleVehicleTypeChange = (event) => {
		setVehicleType(event.target.value);
	};

	const handleVehicleRegNumChange = (event) => {
		setVehicleRegNum(event.target.value);
	};
	const handleVehicleNameChange = (event) => {
		setVehicleName(event.target.value);
	};
	const handleUserLicenseIDChange = (event) => {
		setUserLicenseID(event.target.value);
	};

	const handleFirstnameChange = (event) => {
		setFirstname(event.target.value);
	};
	const handleLastnameChange = (event) => {
		setLastname(event.target.value);
	};
	const handleEmailIDChange = (event) => {
		setEmailID(event.target.value);
	};
	const handlePhoneNumberChange = (event) => {
		setPhoneNumber(event.target.value);
	};
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">First name</label>
          <input type="text" value={firstname} onChange={handleFirstnameChange} class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Last name</label>
          <input type="text" value={lastname} onChange={handleLastnameChange} class="form-control" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email ID</label>
          <input type="email" class="form-control" value={emailid} onChange={handleEmailIDChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Phone Number</label>
          <input type="tel" class="form-control" value={phonenumber} onChange={handlePhoneNumberChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">User name</label>
          <input type="text" class="form-control" value={username} onChange={handleUsernameChange}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
        <label for="exampleInputEmail1" class="form-label">
		 		Do you have a vehicle?
		 		<select value={hasVehicle ? 'yes' : 'no'} onChange={handleHasVehicleChange}>
		 			<option value="yes">Yes</option>
		 			<option value="no">No</option>
		 		</select>
		 	</label>
        </div>
        {hasVehicle && (
            <div>
                <div>
        <label for="exampleInputEmail1" class="form-label">
		 		Vehicle Type:
		 		<select  value={vehicleType} onChange={handleVehicleTypeChange}>
		 			<option value="2w">2w</option>
		 			<option value="4w">4w</option>
		 		</select>
		 	</label>
        </div>
				<div>
					<label for="exampleInputEmail1" class="form-label">
						Vehicle RegNumber:
						<input type="text" class="form-control" value={vehicleregno} onChange={handleVehicleRegNumChange} />
					</label>
                    </div>
                    <div>
					<label for="exampleInputEmail1" class="form-label">
						Vehicle Name:
						<input type="text" class="form-control" value={vehiclename} onChange={handleVehicleNameChange} />
					</label>
				</div>
                <div>
					<label for="exampleInputEmail1" class="form-label">
						User LicenseID:
						<input type="text" class="form-control" value={userlicenseid} onChange={handleUserLicenseIDChange} />
					</label>
				</div>
                </div>
			)}
        
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
	);
};


export default VehicleRegistration;