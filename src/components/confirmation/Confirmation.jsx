import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Component } from "react";

import ConfirmationResult from "./ConfirmationResult";

class Confirmation extends Component {

  render(){
    let results = this.props.selectedSeats.map((result) => {
      return <ConfirmationResult key={result.id} result={result} chairs={this.props.chairs}/>;
    });
    console.log(this.props.selectedSeats)
    return (
      
      <div>
        {results}
        <div class="row justify-content-md-right">
          <div class="col">Cena łączna: {results.length * 22} PLN</div>
        </div>
      </div>
    );
  }
};

Confirmation.propTypes = {
  selectedSeats: PropTypes.object.isRequired,
  chairs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSeats: state.hall.selectedSeats,
  chairs: state.hall.chairs,
});

export default connect(mapStateToProps, null)(Confirmation);

