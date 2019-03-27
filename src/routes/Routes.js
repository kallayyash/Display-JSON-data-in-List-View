import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './../Screens/Login';
import Home from './../Screens/Home'

class Routes extends React.Component {
    render() {
        return (

            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} hideNavBar = {true}  initial={true}/>
                    <Scene key="home" component={Home}   />
                </Scene>
            </Router>
        )
    }

}
export default Routes
