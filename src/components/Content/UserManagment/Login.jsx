import React, {Component} from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postLogin} from "../../../actions/userActions";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const login = {
            username: this.state.email,
            password: this.state.password
        };

        this.props.postLogin(login, this.props.history);

        console.log(login);
    };

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row widnowLogin">
                        <div className="col-md-6 m-auto">
                            <div className="border-log mx-auto">
                                <h3 className="display-4 text-center">Logowanie</h3>

                                <br/>
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className={classnames("form-control form-control-lg", {
                                                //   "is-invalid": errors.username
                                            })}
                                            placeholder="E-mail"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                        />
                                        {/* {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                  )}*/}

                                        <br/>
                                        <input
                                            type="password"
                                            className={classnames("form-control form-control-lg", {
                                                //   "is-invalid": errors.password
                                            })}
                                            placeholder="Hasło"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                        {/* {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                  )} */}
                                    </div>

                                    <div className="button_log">
                                        <button
                                            type="submit"
                                            className="btn btn-info mx-auto btn-lg btn-block"
                                            onClick={this.handleSubmit}
                                        >
                                            Zaloguj
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    postLogin: PropTypes.func.isRequired
};


export default connect(null, {postLogin})(
    Login
);
