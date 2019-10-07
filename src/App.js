import React, { Component } from 'react';
import Firehouses from '../data/firehouse.json';
import House from './House'
import HouseList from './HouseList'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firehouse: Firehouses,
      currentHouse: "Engine 4/Ladder 15"
    }

  }

changeMe(H){
console.log("this is H", H)
  this.setState(state => {
    state.currentHouse =  H
  })

}



  render() {
     const data = this.state.firehouse.find(house => house.FacilityName === this.state.currentHouse);

    console.log(this.state.firehouse)

    return (
      <div className="App">


      <HouseList all={this.state.firehouse} change={this.changeMe.bind(this)}/>
      <House current={data} />
      </div>

    );
  }
}




export default App;
