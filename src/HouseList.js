
import React, {Component} from 'react'

export default class HouseList extends Component{



myFunc(B){
  this.props.change(B)
}


grabAll(){
  return this.props.all.map((house, index) => {
        return (
          <div key={index} onClick={(e) => this.myFunc(house.FacilityName)} className="theHouse">
             <h1> {house.FacilityName}</h1>
             <h3> { house.FacilityAddress} </h3>
             <p> {house.Borough} </p>
          </div>

          )
  })
}



render(){

      return(

            <div className="station">
              <div className="top"> </div>
                <div className="Houses">
                          {this.grabAll()}
                </div>
                <div className="bottom"> </div>
          </div>
        )
}

}

