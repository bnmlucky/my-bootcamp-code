import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import List from './components/List.js';
import Article from './components/Article.js';
import tikka from '../public/assets/tikka.jpg'

import RecipeData from "./data/recipe.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = RecipeData;
  }
  async componentDidMount() {
    this.setState({
      title: RecipeData.title,
      name: RecipeData.byLine.name,
      activePrep: RecipeData.activePrep,
      totalPrep: RecipeData.totalPrep,
      servings: RecipeData.servings,
      ingredients: RecipeData.ingredients,
      Preparation: RecipeData.Preparation,
      img: RecipeData.img
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className="flex-container">
        <Header title={this.state.title} name={this.state.name} />
        <List activePrep={this.state.activePrep} totalPrep={this.state.totalPrep} servings={this.state.servings} />
        <Article ingredients={this.state.ingredients} img={tikka} Preparation={this.state.Preparation} />

      </div>
    );
  }
}

export default App;
