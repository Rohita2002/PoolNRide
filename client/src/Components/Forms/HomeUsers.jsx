import React, { Fragment } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../Basic/NavigationBar'

function HomeUsers(){
    console.log("hi from homeusers"); //infinite loop resolve?
    return(
        //navigation bar has profile and other options
        <Fragment>
            <NavigationBar/>
        </Fragment>
    )
}

export default HomeUsers;