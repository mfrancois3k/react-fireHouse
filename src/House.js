
import React, {Component} from 'react'

export default class House extends Component {




  render(){
        let Fname = this.props.current.FacilityName;
        let Faddress = this.props.current.FacilityAddress;
        let borough = this.props.current.Borough;

    return(
      <div className="single">
        <h1> {Fname}</h1>
          <h3> {Faddress} </h3>
          <p> {borough} </p>
          </div>
      )
  }





}
