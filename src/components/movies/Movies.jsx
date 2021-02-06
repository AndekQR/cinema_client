import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getAllMovies} from "../../actions/movieActions";
import MoviesResult from "./MoviesResult";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: []};
    }

    componentDidMount() {
        this.props.getAllMovies();
    }

    componentDidUpdate(prevProps) {
        if (this.props.movies.movies !== undefined && this.props.movies !== prevProps.movies) {
            console.log(this.props.movies)
            this.setState({
                movies: this.props.movies.movies.content
            });
        }
    }

    render() {

        return <div>
            {(this.state.movies !== undefined && this.state.movies.length >= 0) &&
            this.state.movies.map((result) => {
                return <MoviesResult key={result.id} result={result}/>;
            })
            }
        </div>

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
