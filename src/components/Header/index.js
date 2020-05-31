import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { AiFillGithub } from 'react-icons/ai'
import { MdNotificationsActive, MdAdd } from 'react-icons/md'
import { GiHamburgerMenu} from 'react-icons/gi'

//import imgProfile from '../../assets/avatar_empty.jpg';

import './style.scss';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
        this.handleProfile = this.handleProfile.bind(this);

    }


    handleProfile(event) {
        event.preventDefault();
        const api = `https://api.github.com/users/${this.state.github_username}`

        localStorage.setItem('user/profile', this.state.profile);

        fetch(api)
            .then((response) => response.json())
            .then((json) => {

                if (json) {
                    this.setState({ user: json })
                    this.setState({ redirectToReferrer: true })
                    document.location = `/user/${this.state.github_username}`;
                }
            })
    }

    render() {

        return (
            <div className="header">
                <nav>
                    <div className="nav-bar">
                        <div className="icon-nav">
                            <Link to='/'>
                                <AiFillGithub size='38' />
                            </Link>
                        </div>
                        <form onSubmit={this.handleProfile}>
                            <input
                                type="text"
                                placeholder='Search here'
                                value={this.state.github_username}
                                onChange={(e) => this.setState({ github_username: e.target.value })}
                            />
                        </form>
                    </div>
                    <ul>
                        <li>Pull requests</li>
                        <li>Issues</li>
                        <li>Marketplace</li>
                        <li>Explore</li>
                    </ul>

                    <div className='nav-options'>
                        <div className="toggle-nav">
                            <Link to='/'>
                                <GiHamburgerMenu size='24'/>
                            </Link>
                        </div>

                        <Link to='/'>
                            <MdNotificationsActive size='24' />
                        </Link>
                        <Link to='/'>
                            <MdAdd size='24' />
                        </Link>
                        <a href={this.props.profileHtml}>
                            <figure>
                                <img src={this.props.profileImg} alt="" />
                            </figure>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;