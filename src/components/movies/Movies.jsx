import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getAllMovies } from "../../actions/movieActions";
import MoviesResult from "./MoviesResult";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], isLoading: true };
  }

  componentDidMount() {
    this.props.getAllMovies(this.props.user.user.token);
    console.log("hej");
  }

  componentDidUpdate(prevProps) {
    if (this.props.movies !== prevProps.movies) {
      console.log("raz");
      this.setState({
        movies: this.props.movies,
        isLoading: false,
      });
    }
  }

  render() {
      console.log(this.state.movies)
    if (this.state.isLoading) return <div>laduje</div>;
    const resultAlgorithm = (tab) => {
      if (tab.length < 1) {
        return (
          <div
            className="alert alert-danger text-center col-7 col-md-5"
            role="alert"
            style={{
              position: "relative",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Nie znaleziono repertuaru
          </div>
        );
      } else if (tab.length >= 1) {
        return tab.map((result) => {
          return <MoviesResult key={result.id} result={result} />;
        });
      }
    };

    let resultContent = resultAlgorithm(this.state.movies);

    return <div>{resultContent}</div>;
  }
}

Movies.propTypes = {
  getAllMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user,
});

export default connect(mapStateToProps, {
  getAllMovies,
})(Movies);
