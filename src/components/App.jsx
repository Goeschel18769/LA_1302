import React, { Component } from 'react'
import './index.css';
import MyComponent from './json';
import Header from './header';
import Footer from './footer';
class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment id="application">
                <Header/>
                 <MyComponent/>
                 <Footer/>
            </React.Fragment>
        );
    }
}
 
export default App;