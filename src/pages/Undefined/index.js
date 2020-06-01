import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import octocatUndefined from '../../assets/Octocat-undefined.png';
import './styles.scss';

class Undefined extends Component {

    render() {
        return (
            <div className='Undefined'>
                <div className="container">
                    <figure>
                        <img src={octocatUndefined} alt="" />
                    </figure>
                    <h3>Sorry, can't find the page...</h3>
                    <Link to='/'>
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }
}

export default Undefined;