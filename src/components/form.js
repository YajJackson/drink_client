import React, {Component} from 'react'
import axios from 'axios'
import './form.css'

export default class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: undefined,
      calories: undefined,
      sugar: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value.trim() 
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let postData = {
      name: this.state.name,
      calories: this.state.calories,
      sugar: this.state.sugar
    }

    axios.post('http://localhost:3001/coke', postData)
    .then(response => console.log(response))
    .catch(error => console.log(error))

    // axios.get('http://localhost:3001/coke')
    // .then(response => console.log(response))
    // .catch(error => console.log(error))
  }

  render(){
    return (
      <div className='mdl-cell mdl-cell--4-col mdl-shadow--2dp'>
          <form onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label fit">
              <label className="mdl-textfield__label">Beverage Name</label>
              <input 
                type="text"
                className="mdl-textfield__input" 
                id='name'  
                value={this.state.name} 
                onChange={this.handleChange}>
              </input>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label fit">
              <label className="mdl-textfield__label">Calories</label>
              <input 
                type="text" 
                className="mdl-textfield__input" 
                pattern="-?[0-9]*(\.[0-9]+)?" 
                id='calories'
                value={this.state.calories}
                onChange={this.handleChange}>
              </input>
              <span className="mdl-textfield__error">Calories must be a number!</span>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label fit">
              <label className="mdl-textfield__label">Sugar</label>
              <input 
                type="text" 
                className="mdl-textfield__input" 
                pattern="-?[0-9]*(\.[0-9]+)?" 
                id='sugar'
                value={this.state.sugar}
                onChange={this.handleChange}>
              </input>
              <span className="mdl-textfield__error">Sugar must be a number!</span>
            </div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent fit">
              Add Drink
            </button>
          </form>
        </div>
    )
  }
}