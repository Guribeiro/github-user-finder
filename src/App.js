import React, { Component } from 'react';



import Routes from './routes.js';

import empty_avatar from './assets/avatar_empty.jpg'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      api: [],
      avatar_url: empty_avatar,
      github_username_returned: '',
      profile_name: '',
      profile_bio: '',
      createdAt: '',
      updatedAt: '',
      followers: '',
      following: '',
      repositories: ''
    }

    this.searchProfile = this.searchProfile.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  searchProfile(e) {
    e.preventDefault();
    let username = this.state.github_username;

    const api = `https://api.github.com/users/${username}`

    const state = this.state;

    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        state.api = json;

        const { avatar_url, name, login, bio, followers, following, created_at, updated_at } = state.api

        this.setState({
          avatar_url,
          profile_name: name,
          github_username_returned: login,
          profile_bio: bio,
          createdAt: created_at,
          updatedAt: updated_at,
          followers,
          following,
          repositories: ''
        })

      })

  }

  clearSearch(e) {
    e.preventDefault();
    const { github_username_returned } = this.state

    if (github_username_returned !== '') {
      this.setState({
        avatar_url: empty_avatar,
        profile_name: '',
        github_username_returned: '',
        profile_bio: '',
        createdAt: '',
        updatedAt: '',
        followers: '',
        following: '',
        repositories: '',
        github_username: ''

      })
    }

  }


  render() {
    return (
      <div className='App'>

        <Routes />

      </div>
    );
  }
}

export default App;
