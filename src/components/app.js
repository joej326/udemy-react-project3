import React, { Component } from 'react';

import Searchbar from './../containers/Searchbar';
import WeatherList from './../containers/Weather_List';

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <WeatherList />
      </div>
    );
  }
}
