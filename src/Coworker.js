import React, { Component } from 'react';
import logo from './logo.svg'

class mypage extends Component {
  state = {}

  componentDidMount() {
    this.state = {
      redirectUrl: '/',
      articles: [
        {
          id:'1',
          title: 'first article'
        },
        { 
          title: 'secodn article',
        },
        { id: "3", title: "third article" }
      ]
    }
  }

  redirect() {
    window.location.href = this.state.redirectUrl
  }
  
  render() {
    return (
      <div>
        <nav>
        <img src={logo} alt="logo" />
        </nav>
        {this.state.articles.map(article => {
          return (
            <p>the article {article.title}</p>
          )
        })}
        <p style={{ color: "blue" }} onClick={this.redirect()}>go to home</p>
      </div>
    );
  }
}

export default mypage;
