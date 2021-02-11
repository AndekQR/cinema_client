import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SeatPicker from "react-seat-picker";
import update from "immutability-helper";
import Confirmation from "../confirmation/Confirmation";
import PersonalData from "../personalData/PersonalData";
import "./test.css";
import Hall from "../seat/Hall";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { makeReservation } from "../../actions/userActions";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      loading: false,
      selectedSeats: [],
    };
  }

  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 750));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 750));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setState((prevState) => ({
          loading: false,
          selectedSeats: [
            ...prevState.selectedSeats,
            { row, number, id, bilet: "normalny", cost: 22.0 },
          ],
        }));
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState((prevState) => ({
          loading: false,
          selectedSeats: update(prevState.selectedSeats, {
            $splice: [[row, 1]],
          }),
        }));
      }
    );
  };

  handleToken = async (token) => {
    const price = this.props.selectedSeats.length * 22;
    const amount = this.props.selectedSeats.length * 22;
    const moveId = this.props.location.state.result.id;
    const chairIds = this.props.selectedSeats.map((item) => {
      return item.id;
    });

    const reserv = { chairIds, moveId, price };
    console.log(reserv);
    const response = await axios.post("http://localhost:3030/checkout", {
      token,
      amount,
    });

    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      window.alert("Sukces! Sprawdź email po więcej informacji");
      this.props.makeReservation(reserv, this.props.history);
    } else {
      window.alert("Coś poszło nie tak", { type: "error" });
    }
  };

  getSteps = () => {
    return [
      "Krok 1 - Wybór miejsca",
      "Krok 2 - Potwierdzenie",
      "Krok 3 - Dane osobowe",
      "Krok 4 - Podsumowanie",
    ];
  };

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return "Select campaign settings...";
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  };

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  handleReset = () => {
    this.setState({ activeStep: (this.state.activeStep = 0) });
  };

  render() {
    const { classes } = this.props;
    const steps = this.getSteps();

    const rows = [
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        null,
        null,
        null,
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        null,
        null,
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        { id: 14, number: 14 },
        null,
      ],
      [
        null,
        null,
        null,
        null,
        null,
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        { id: 14, number: 14 },
        { id: 15, number: 15 },
      ],
      [
        null,
        null,
        null,
        null,
        null,
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        { id: 14, number: 14 },
        { id: 15, number: 15 },
      ],
      [
        null,
        null,
        null,
        null,
        null,
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        { id: 14, number: 14 },
        { id: 15, number: 15 },
      ],
      [
        null,
        null,
        null,
        null,
        null,
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        { id: 14, number: 14 },
        { id: 15, number: 15 },
      ],
      [
        null,
        null,
        null,
        null,
        null,
        { id: 1, number: 1, isReserved: true },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        { id: 14, number: 14 },
        { id: 15, number: 15 },
      ],
      [
        null,
        null,
        null,
        null,
        null,
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 },
        { id: 9, number: 9 },
        { id: 10, number: 10 },
        { id: 11, number: 11 },
        { id: 12, number: 12 },
        { id: 13, number: 13 },
        { id: 14, number: 14 },
        { id: 15, number: 15 },
      ],
    ];

    const { loading } = this.state;

    return (
      <div className="container">
        <div className={classes.root}>
          <Stepper activeStep={this.state.activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <hr />
          <div>
            {this.state.activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {(() => {
                    switch (this.state.activeStep) {
                      case 0:
                        return <Hall movie={this.props.location.state}/>;
                      case 1:
                        return (
                          <React.Fragment>
                            <h1>{this.props.location.state.result.title}</h1>
                            <h1>{this.props.location.state.result.year}</h1>
                            <span>
                              data:{" "}
                              {this.props.location.state.result.startTime.slice(
                                0,
                                10
                              )}{" "}
                              / godzina:{" "}
                              {this.props.location.state.result.startTime.slice(
                                11,
                                16
                              )}{" "}
                              / sala: 4
                            </span>
                            <hr />
                            <Confirmation />
                          </React.Fragment>
                        );
                      case 2:
                        return (
                          <StripeCheckout
                            stripeKey="pk_test_8VCpBN8J5r2s5vGeV0mihHZA00EZ5unMxL"
                            token={this.handleToken}
                            amount={this.props.selectedSeats.length * 22 * 100}
                            name={`Płatność do zamówienia`}
                            panelLabel="Zapłać"
                            currency="PLN"
                            allowRememberMe={false}
                          />
                        );
                      default:
                        return "Unknown stepIndex";
                    }
                  })()}
                </Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                  <Button
                    disabled={this.state.activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                  >
                    Wróć
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {this.state.activeStep === steps.length - 1
                      ? "Zakończ"
                      : "Dalej"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Reservation.propTypes = {
  selectedSeats: PropTypes.array.isRequired,
  makeReservation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSeats: state.hall.selectedSeats,
});

export default compose(
  connect(mapStateToProps, { makeReservation }),
  withStyles(styles, { withTheme: true })
)(Reservation);
