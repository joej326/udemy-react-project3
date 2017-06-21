import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.weather){
      let weather = '';
      console.log('no weather coming in');
      return (
        <div></div>
      )

    }else{
      let weather = this.props.weather.list[0].weather[0].description;
      console.log("test", this.props.weather.list[0].weather[0].description);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>{weather}</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    )
  }
}

}


function mapStateToProps(state){
  return{
    weather: state.weather[0]
  }
}

export default connect(mapStateToProps,{})(WeatherList)
