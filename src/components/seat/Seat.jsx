import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addSelectedSeat, deleteSelectedSeat } from "../../actions/hallActions";

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      reservated: false,
      selectedSeats: [],
    };
  }

  handleClick = () => {
    this.setState({
      selected: !this.state.selected,
    });
    if (this.state.selected === false) {
      this.props.addSelectedSeat(this.props.result);
    } else {
      this.props.deleteSelectedSeat(this.props.result.id);
    }
  };

  render() {
    let btn_class = this.state.selected ? "btn btn-success" : "btn btn-primary";
    let btn_class2 = this.props.result.reserved
      ? "btn btn-secondary disabled"
      : "btn btn-primary";
    return (
      <div className="item">
        {this.props.result.reserved === true ? (
          <button
            type="button"
            className={btn_class2}
            onClick={this.handleClick}
            disabled
          >
            Click Me!
          </button>
        ) : (
          <button
            type="button"
            className={btn_class}
            onClick={this.handleClick}
          >
            Click Me!
          </button>
        )}
        
      </div>
    );
  }
}

Seat.propTypes = {
  addSelectedSeat: PropTypes.func.isRequired,
  deleteSelectedSeat: PropTypes.func.isRequired,
  selectedSeats: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSeats: state.hall.selectedSeats,
});

export default connect(mapStateToProps, {
  addSelectedSeat,
  deleteSelectedSeat,
})(Seat);
