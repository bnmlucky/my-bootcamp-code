import React, { Component } from 'react';
import axios from 'axios';
import ApiInfo from './ApiInfo.js'
import AnswerButton from './AnswerButton.js'

class LetsPlay extends Component {
    constructor() {
        super();

        this.state = {
            apiData: '',
            textDisplay: Boolean,
        }
        this.callApi = this.callApi.bind(this);
        this.showAnswer = this.showAnswer.bind(this);
    }

    async callApi() {
        try {
            const BASE_URL = 'http://jservice.io/api/random';
            const apiData = await axios.get(`${BASE_URL}?`);
            console.log('API sent: ', apiData)

            const response = apiData.data[0]

            const Answer = response.answer;
            const Category = response.category.title;
            const Value = response.value;
            const Question = response.question;

            this.setState({
                AnswerData: Answer,
                CategoryData: Category,
                ValueData: Value,
                QuestionData: Question,
                visibleAnswer: ""
            })
        }
        catch (err) {
            console.log('API call error: ', err);
        }
    }

    showAnswer() {
        this.setState({
            visibleAnswer: this.state.AnswerData
        })
    }

    render() {
        return (
            <main>
                <h1>Let's Play!</h1>
                <button className="btn" onClick={this.callApi}>Get Question</button>
                <ApiInfo
                    category={this.state.CategoryData}
                    points={this.state.ValueData}
                    Question={this.state.QuestionData}
                />

                <AnswerButton displayAnswer={this.showAnswer} />
                {/* <button onClick={this.showAnswer}>Click to Reveal Answer</button> */}

                <h3 >Answer: {this.state.visibleAnswer} </h3>

            </main>
        )
    }
}
export default LetsPlay;