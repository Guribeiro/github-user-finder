import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import octocatUndefined from '../../assets/Octocat-undefined.png';
import './styles.scss';

class Undefined extends Component {

    render() {
        return (
            <div className='Home'>
                <div className="container">
                    <figure>
                        <img src={octocatUndefined} alt="" />
                    </figure>
                    <h1>Sorry, can't find the page...</h1>
                    <Link to='/'>
                        Click here to go back
                    </Link>
                </div>
            </div>
        );
    }
}

export default Undefined;