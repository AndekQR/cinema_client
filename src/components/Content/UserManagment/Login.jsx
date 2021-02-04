import React, { Component } from "react";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      login: "",
      password: "",
      user: {}
    };
  }

  componentDidMount() {
    const { user } = this.props;
    this.setState({
      user
    });
  }

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    this.setState({
      user
    });
  }

  moveWin = () => {
    setTimeout(function() {
      window.location.href = "/acc";
    }, 500);
  };

  login = e => {
    console.log(this.state.login + "@test.com");
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(
        this.state.login + "@test.com",
        this.state.password
      )
      .then(this.moveWin)
      .catch(err => {
        console.log(err);
        window.alert(`${err}`);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row widnowLogin">
            <div className="col-md-6 m-auto">
              <div className="border-log mx-auto">
                <h3 className="display-4 text-center">Logowanie</h3>
                <center>
                  <img src={logo} alt="logo" />
                </center>
                <br />
                <form onSubmit={null}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        //   "is-invalid": errors.username
                      })}
                      placeholder="Login"
                      name="login"
                      value={this.state.login}
                      onChange={this.handleChange}
                    />
                    {/* {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                  )}*/}

                    <br />
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
                      onClick={this.login}
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

export default Login;
