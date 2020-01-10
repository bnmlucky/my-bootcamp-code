import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form>
                    <h4>ADD A DATER</h4>
                    <input type="text" id="name" name="name" placeholder="name"></input>
                    <input type="number" id="age" name="age" placeholder="age"></input>
                    <input type="text" id="starsign" name="starsign" placeholder="starsign"></input>
                    <input type="text" id="img" name="img" placeholder="img"></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default Form;