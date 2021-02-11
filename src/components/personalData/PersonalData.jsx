import React, { Component } from "react";
import "./personalData.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {makeReservation} from "../../actions/userActions";

class PersonalData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      number: "",
      seats: []
    };
  }

//   componentDidUpdate(prevProps){

//     if (this.seats !== prevProps.selectedSeats) {

//       const abc = this.props.selectedSeats.map(item => {
    
//         return item.id
//       })

//       this.setState({
//         seats: abc
//       })
//   }
// }

  handleSubmit = e => {
    e.preventDefault();


    // this.props.makeReservation((this.props.selectedSeats., this.props.history);

  };

  componentDidMount() {
    const abc = this.props.selectedSeats.map(item => {
    
      return item.id
    })


    this.setState({
      name: this.props.user.user.firstName,
      lastname: this.props.user.user.lastName,
      email: this.props.user.user.email,
      seats: abc
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // var seats = []
    // console.log(seats)
    // this.props.selectedSeats.forEach(item => {
    //   console.log(item.id)
    //   for (var i = 1; i < item.length; i++) {
    //     console.log(item)
    //     this.setState({
    //      seats: seats[i - 1].push([item[0], item[i]])
    //   })}
    // });
    return (
      <div className="container">
        <h4 style={{ textAlign: "center" }}>Wprowadź swoje dane osobowe</h4>
        <br />
        <div class="mb-3">
          <input
            type="name"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Imię"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Nazwisko"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="E-mail"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Numer telefonu"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          class="btn btn-secondary btn-lg"
          onClick={this.handleSubmit}
        >
          Płatność
        </button>
      </div>
    );
  }
}

PersonalData.propTypes = {
  makeReservation: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {makeReservation})(PersonalData);
