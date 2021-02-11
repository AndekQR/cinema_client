import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getChairsByCinemaHall,
  getReservatedChairsByHall,
} from "../../actions/hallActions";
import Seat from "./Seat";
import "./hall.css";

class Hall extends Component {
  constructor() {
    super();

    this.state = {
      selectedSeats: [],
      mappedChairs: []
    };
  }

  componentDidMount() {
    this.props.getChairsByCinemaHall(4);
    this.props.getReservatedChairsByHall(4, this.props.movie.result.id);
  }

  componentDidUpdate(prevState){
      if(this.props.chairs == undefined && this.props.reservatedChairs == undefined){
          return
      }
      console.log(prevState.mappedChairs);
      console.log(this.state.mappedChairs);
      let qwe = this.abc();
      if(!this.compareArray(qwe, this.state.mappedChairs)){
        console.log(qwe)
        this.setState({
            mappedChairs: qwe
        })
      }

  }

  compareArray = (array1, array2) =>{
    if(array1.length == 0) return false
    if(array1.length !== array2.length)return false
    for(let i=0;i<array1.length-1;i++){
        let array1Element = array1[i];
        let array2Element = array2[i];
        
        if(array1Element.id !== array2Element.id || array1Element.reserved !== array2Element.reserved){
            return false;
        }
    }
    return true
  }

  abc = () => {
      console.log(this.props.reservatedChairs)
      console.log(this.props.chairs)

    return this.props.chairs.map((chair) => {
      let fil = this.props.reservatedChairs.filter((resrv) => {
        return resrv.id == chair.id;
      });
      
      console.log(fil)
      if (fil.length > 0) {
        return { ...chair, reserved: true };
      } else {
        return { ...chair, reserved: false };
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="grid-1">
          {this.state.mappedChairs.map((result) => {
            return <Seat key={result.id} result={result} />;
          })}
        </div>
      </div>
    );
  }
}

Hall.propTypes = {
  getChairsByCinemaHall: PropTypes.func.isRequired,
  getReservatedChairsByHall: PropTypes.func.isRequired,
  chairs: PropTypes.array.isRequired,
  reservatedChairs: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  chairs: state.hall.chairs,
  reservatedChairs: state.hall.reservatedChairs,
});

export default connect(mapStateToProps, {
  getChairsByCinemaHall,
  getReservatedChairsByHall,
})(Hall);
