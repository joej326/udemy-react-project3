import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class Searchbar extends Component {
  constructor(){
    super();

    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event){
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault();
    //we need to go and fetch weather data

    this.setState({
      term: ''
    })
    this.props.fetchWeather(this.state.term);
  }

  render() {


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
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather} , dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar)
//export default connect(mapStateToProps, { fetchWeather })(Searchbar)
