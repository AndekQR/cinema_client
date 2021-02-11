import React, { Component } from "react";

class ConfirmationResult extends Component {
  render() {
    const { result, chairs } = this.props;

    return (
        <React.Fragment>
        <div className="row">
          <div className="col-sm">Miejsce: {result.number + 1}</div>
          <div className="col-sm">Rząd: {Math.ceil((result.number + 1) / 5)}</div>
          <div className="col-sm">Bilet: {result.type} </div>
          <div className="col-sm">Cena: 22 zł</div>
        </div>
        <hr/>
        </React.Fragment>
    );
  }
}

export default ConfirmationResult;
