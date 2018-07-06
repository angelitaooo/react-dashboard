import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    categories: [
      {id: 'photos'}, 
      {id: 'albums' }, 
      {id: 'comments'},
      {id: 'posts'}
     ],
    categoryInfo: []
  }

  renderCategories = () => {
   return this.state.categories.map((category, index) => <li onClick={this.renderCategoryInfo} key={index}>#{category.id}</li>);
  }

  getCategoryInfo = (category) => {
    const postUrl = `https://jsonplaceholder.typicode.com/${category}`;
    fetch(postUrl)
    .then(response => response.json())
    .then(info => this.setState({categoryInfo: info}))
  }

  renderCategoryInfo = () => {
    return this.state.categoryInfo.map(category => <p>{category.title}</p>);
  }

  render() {
   
    return (
      <div className="App">
        <div className="categories">
          <ul>{this.renderCategories()}</ul>
        </div>
        <div className="category-info">{this.renderCategoryInfo()}</div>
        <button onClick={() => this.getCategoryInfo('posts')}>posts</button>
      </div>
    );
  }
}

export default App;
