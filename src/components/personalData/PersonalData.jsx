import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./personalData.css";

class PersonalData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      number: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
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
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="E-mail"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Numer telefonu"
          />
        </div>
      </div>
    );
  }
}

export default PersonalData;
