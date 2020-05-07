import React, { Component } from 'react';

import './global.css';
import './App.css';

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
        <form>
          <h2>Search github profile</h2>
          <figure>
            <img src={this.state.avatar_url} alt="" />
            <figcaption>
              <div className='profile-infos'>
                <div className='created-container'>
                  <strong>Created at: {this.state.createdAt}</strong>
                  <strong>Updated at: {this.state.updatedAt}</strong>
                </div>
                <div className='follow-container'>
                  <strong>{this.state.followers} Followers</strong>
                  <strong>{this.state.following} Following</strong>
                </div>
              </div>
              <div className='repos-container'>
                <strong>{this.state.repositories} Repositories</strong>
              </div>
              <div className="personal-infos">
                <strong>Nome: {this.state.profile_name}</strong>
                <strong>Username: {this.state.github_username_returned}</strong>
                <strong className='strong-bio'>{this.state.profile_bio}</strong>
              </div>
            </figcaption>
          </figure>
          <div className='search-container'>
            <label htmlFor="">github username</label>
            <input type="text" name="" id="" value={this.state.github_username}
              onChange={(e) => this.setState({ github_username: e.target.value })} />
          </div>
          <div className="buttons-container">
            <button onClick={this.searchProfile}>Procurar</button>
            <button onClick={this.clearSearch}>Limpar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
