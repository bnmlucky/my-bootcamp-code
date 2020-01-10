import axios from 'axios';
import React from 'react';
import NewForm from './components/NewForm.js';
import ballons from './images/two-balloon-icons-68911.png'
import pencil from './images/simpleiconDOTcom-pen-15-64x64.png'
import './css/index.css';
import './css/normalize.css';
import './css/skeleton.css';

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: [],
    }

    this.getHolidays = this.getHolidays.bind(this)
    this.handleAddHoliday = this.handleAddHoliday.bind(this)
 }

  componentDidMount() {
    this.getHolidays()
  }
 
  async getHolidays(){
    const response = await axios.get(`${baseURL}/holidays`)
    const holidays = response.data
    
    this.setState({ holidays: holidays })
  }

  handleAddHoliday(holiday) {
    this.setState({
      holidays: [ ...this.state.holidays, holiday]
    })
  }

  render () {
   return (
     <div className='container'>
      <h1>Holidays! Celebrate!</h1>
      <NewForm handleAddHoliday={this.handleAddHoliday}/>
      <table>
        <tbody>
          { 
            this.state.holidays.map(holiday => {
              return (
                <tr key={holiday._id}>
                  <td>{holiday.name }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
     </div>
   )
  }
}

export default App
