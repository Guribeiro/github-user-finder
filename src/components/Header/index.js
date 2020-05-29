import React, { Component } from 'react';

import { AiFillGithub } from 'react-icons/ai'
import { MdNotificationsActive, MdAdd } from 'react-icons/md'

import imgProfile from '../../assets/avatar_empty.jpg';

import './style.scss';



class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <div className="nav-bar">
                        <div className="icon-nav">
                            <a href="/">
                                <AiFillGithub size='38' />
                            </a>
                        </div>
                        <form>
                            <input type="text" placeholder='Search here' />
                        </form>
                        <ul>
                            <li>Pull requests</li>
                            <li>Issues</li>
                            <li>Marketplace</li>
                            <li>Explore</li>
                        </ul>
                    </div>
                    <div className='nav-options'>
                        <a href="/">
                            <MdNotificationsActive size='24' />
                        </a>
                        <a href="/">
                            <MdAdd size='24' />
                        </a>
                        <a href="/">
                            <figure>
                                <img src={imgProfile} alt="" />
                            </figure>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;