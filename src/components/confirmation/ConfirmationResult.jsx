import React, { Component } from "react";

class ConfirmationResult extends Component {
  render() {
    const { result } = this.props;

    return (
        <React.Fragment>
        <div class="row">
          <div class="col-sm">Miejsce: {result.number}</div>
          <div class="col-sm">Rząd: {result.row}</div>
          <div class="col-sm">Bilet: {result.bilet} </div>
          <div class="col-sm">Cena: {result.cost} zł</div>
        </div>
        <hr/>
        </React.Fragment>
    );
  }
}

export default ConfirmationResult;
