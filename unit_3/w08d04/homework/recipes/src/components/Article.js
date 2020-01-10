import React, { Component } from 'react'


class Article extends Component {
    render() {
        const allIngredients = this.props.ingredients;
        const ingredients = allIngredients.split(', \n').map((ingredient) =>

            <li>{ingredient}</li>
        );
        console.log(ingredients)
        return (
            <div>
                <article className="article">
                    <img id="food_image" src={this.props.img} alt="" className="img-thumbnail" />
                    <div id="Ingredients_cont">
                        <ul>{ingredients}</ul>
                        <p></p>
                    </div>
                    <h2>Preparation</h2>
                    <p>{this.props.Preparation}</p>
                </article>
            </div>
        );
    }
}

export default Article