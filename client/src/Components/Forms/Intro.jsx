import React, { Fragment } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IntroNavigationBar from '../Basic/IntroNavigationBar';

function Intro() {
    
	return (
        //IntroNavigation bar containing signup-signin buttons
        <Fragment>
            <IntroNavigationBar/> 
            <h1><center>Connect and Ride with PoolNRide</center></h1>
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Flilacinfotech.com%2Flilac_assets%2Fimages%2Fwhat-we-do%2Fapp-development%2Ftransportation-logistics%2Frideshare-car-pooling%2Fbanner.svg&imgrefurl=https%3A%2F%2Flilacinfotech.com%2Fwhat-we-do%2Frideshare-carpooling-app-development-india&tbnid=bo4mqkjlO8U6BM&vet=12ahUKEwiXiuHpgsT9AhVowTgGHWDSDg8QMygcegUIARCNAg..i&docid=r-_PQ_SqVpfDkM&w=800&h=758&q=%20carpooling%20images&ved=2ahUKEwiXiuHpgsT9AhVowTgGHWDSDg8QMygcegUIARCNAg" alt="Pooling" width="460" height="345"></img>

        </Fragment>
    )
}

export default Intro;
