import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';

import './style.scss';
//import { Link } from 'react-router-dom';

class UserProfile extends Component {

    constructor(props) {
        super()
        this.state = {
            user: [],
            repos: [],
            followers: [],
            following: [],
            starred: []
        }

        this.handleRequest = this.handleRequest.bind(this);
    }



    componentDidMount() {
        const { id } = this.props.match.params

        this.handleRequest(id);

    }

    handleRequest(id) {
        const api = `https://api.github.com/users/${id}`

        fetch(api)
            .then((response) => response.json()
                .then((json) => {
                    this.setState({ user: json })

                    console.log(json.repos_url)

                    fetch(json.repos_url)
                        .then((response) => response.json()
                            .then((json) => {
                                this.setState({ repos: json })
                            }));

                    fetch(json.followers_url)
                        .then((response) => response.json()
                            .then((json) => {
                                this.setState({ followers: json })

                            }));

                    fetch(`https://api.github.com/users/${this.state.user.login}/following`)
                        .then((response) => response.json()
                            .then((json) => {
                                this.setState({ following: json })

                            }));
                    fetch(`https://api.github.com/users/${this.state.user.login}/starred`)
                        .then((response) => response.json()
                            .then((json) => {
                                this.setState({ starred: json })

                            }));
                }));
    }

    render() {
        return (
            <Fragment>
                <Header profileImg={this.state.user.avatar_url} profileHtml={this.state.user.html_url} />
                <div className='userProfile'>
                    <div className="container">
                        <div className="profile-infos">
                            <figure>
                                <a href={this.state.user.html_url}>
                                    <img src={this.state.user.avatar_url} alt="" />
                                </a>
                                <figcaption>
                                    <strong className='name'>{this.state.user.name}</strong>
                                    <strong className='username'>{this.state.user.login}</strong>
                                    <strong className='bio'>{this.state.user.bio}</strong>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="works-infos">
                            <div className="over-view">
                                <ul>
                                    <li>Overview</li>

                                    <li>Repositories
                                        <span>{this.state.repos.length}</span>
                                    </li>

                                    <li>
                                        Projects
                                        <span>{0}</span>
                                    </li>

                                    <li>
                                        Packages
                                        <span>0</span>
                                    </li>

                                    <li>
                                        Stars
                                        <span>{this.state.starred.length}</span>
                                    </li>

                                    <li>
                                        Followers
                                        <span>{this.state.followers.length}</span>
                                    </li>

                                    <li>
                                        Following
                                        <span>{this.state.following.length}</span>
                                    </li>
                                </ul>

                            </div>
                            <div className="repos">

                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default UserProfile;