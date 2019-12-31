import React, { Component } from 'react';
// MyFonts NPM modules
import { Header, Footer, ConfigManager } from 'myfonts-header-footer';
import "myfonts-header-footer/dist/main.css";

import '../styles/styles.scss';

const headerApi = {
  url: 'http://localhost:3001/',
  endpoints: {
    cart: 'backbone/cart/',
    login: 'backbone/user/login/',
    logout: 'backbone/user/logout',
    searchAutocomplete: 'ajax-server/search_suggest.php',
    userInfo: 'backbone/info/details',
    userSubscriptions: 'backbone/info/subscriptions',
  },
};
ConfigManager.setApiEndpoints(headerApi);
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="extended-content">
          <article className="teaser">
            <img src="/green_leaf.jpg" alt="green leaf" />
            <h1>Green Leaf</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>

          <article className="teaser">
            <img src="/red_leaf.jpeg" alt="red leaf" />
            <h1>Red Leaf</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </article>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home;