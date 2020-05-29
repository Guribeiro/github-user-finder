import React, { Component } from 'react';

import octocat from '../../assets/Octocat.png';
import './styles.scss';

class Home extends Component {


    render() {
        return (
            <div className='Home'>
                <div className="container">
                    <figure>
                        <img src={octocat} alt="" />
                    </figure>
                    <h1>Welcome to the <span>github user-finder</span></h1>
                    <p>Here you can search for any github profile you want. Check some of its informations and enjoy it.</p>
                </div>
            </div>
        );
    }
}

export default Home;