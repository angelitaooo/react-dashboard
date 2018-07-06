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
    categoryInfo: [
      {id: 'photos', title: 'item1' }, 
      {id:'albums', title: 'item2' },
      {id:'comments', title: 'item3' },
      {id:'albums', title: 'item4' }
    ]
  }

  renderCategories = () => {
   return this.state.categories.map((category, index) => <li onClick={this.renderCategoryInfo} key={index}>#{category.id}</li>);
  }

  renderCategoryInfo = () => {
    console.log(this.state.categoryInfo);
  }



  // componentDidMount() {
  //   this.renderCategories();
  // }


  render() {
    return (
      <div className="App">
        <div className="categories">
          <ul>{this.renderCategories()}</ul>
        </div>
        <div className="category-info"></div>
      </div>
    );
  }
}

export default App;
