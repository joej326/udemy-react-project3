import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

export class Searchbar extends Component {
  constructor(){
    super();

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  console.log(fetchWeather)
  }

  onInputChange(event){
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault();
    //we need to go and fetch weather data
    console.log(this.props.fetchWeather)
    this.setState({
      term: ''
    }, ()=> console.log(this.state))
    this.props.fetchWeather(this.state.term)
  }

  render() {
    console.log(this.props);

    return (
        <form onSubmit= {this.onFormSubmit} className="input-group">
          <input
            value={this.state.term}
            placeholder='get a five-cast'
            onChange={ this.onInputChange} />
          <span className="input-group-btn">
            <button className="btn btn-secondary">Submit</button>
          </span>
        </form>
    )
  }
}
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({fetchWeather} , dispatch);
// }

export default connect(null, {fetchWeather})(Searchbar)
//export default connect(mapStateToProps, { fetchWeather })(Searchbar)
