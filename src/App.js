import React, {Component} from 'react';
import ReactGA from 'react-ga';
import './App.css';

import Landingpage from "./Containers/LandingPage/LandingPage.js"

ReactGA.initialize('UA-177903008-1');

class App extends Component {
    render() {
        return (
            <div className="App">
                <Landingpage/>
            </div>
        );
    }
}

export default App;
