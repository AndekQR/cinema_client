import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./movies.css"

import {getAllMovies} from "../../actions/movieActions";
import MoviesResult from "./MoviesResult";
import {Pagination} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            isLoading: true,
            pagesCount: 0,
            currentPage: 1,
            searchQuery: ""
        };
    }

    componentDidMount() {
        this.props.getAllMovies();
    }

    componentDidUpdate = prevProps => {
        if (this.props.movies.movies !== undefined && this.props.movies !== prevProps.movies) {
            console.log(this.props.movies)
            let movies = this.props.movies.movies;
            let maxPages = Math.ceil(movies.totalRows / movies.size)
            this.setState({
                ...this.state,
                movies: movies.content,
                isLoading: false,
                pagesCount: maxPages
            });
        }
    };

    onPageChange = (event, value) => {
        this.setState({
            ...this.state,
            currentPage: value
        })
        this.props.getAllMovies(value - 1, 5, "title", "asc", this.state.searchQuery)
    }

    onSearch = () => {
        this.props.getAllMovies(this.state.currentPage -1, 5, "title", "asc", this.state.searchQuery)
    }


    render() {

        return <div>
            <div className={"searchBar"}>
                <TextField value={this.state.searchQuery} className={"textField"} variant={"filled"} label={"Tytuł"}
                           onChange={event => {
                                this.setState({
                                    ...this.state,
                                    searchQuery: event.target.value
                                })
                           }}/>
                <Button className={"button"} variant={"contained"} color={"primary"} onClick={this.onSearch}>
                    Szukaj!
                </Button>
            </div>
            {
                (this.state.movies !== undefined && this.state.movies.length >= 0) &&
                this.state.movies.map((result) => {
                    return <MoviesResult key={result.id} result={result}/>;
                })
            }
            <Pagination count={this.state.pagesCount} page={this.state.currentPage} onChange={this.onPageChange}/>
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
