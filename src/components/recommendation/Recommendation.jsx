import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "../movies/movies.css"

import {getAllRecommendation} from "../../actions/movieActions";
import RecommendationResult from "./RecommendationResult";
import {Pagination} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class Recommendation extends Component {
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
        this.props.getAllRecommendation();
    }

    componentDidUpdate = prevProps => {
        if (this.props.recommended !== undefined && this.props.recommended !== prevProps.recommended) {
            console.log(this.props.recommended)
            let movies = this.props.recommended;
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
        this.props.getAllRecommendation(value - 1, 5, "title", "asc", this.state.searchQuery)
    }

    onSearch = () => {
        this.props.getAllRecommendation(this.state.currentPage -1, 5, "title", "asc", this.state.searchQuery)
    }


    render() {

        return <div className="container">
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
                    return <RecommendationResult key={result.id} result={result}/>;
                })
            }
            <Pagination count={this.state.pagesCount} page={this.state.currentPage} onChange={this.onPageChange}/>
            <br/>
        </div>
        
    }
}

Recommendation.propTypes = {
    getAllRecommendation: PropTypes.func.isRequired,
    recommended: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    recommended: state.movies.recommended,
    user: state.user,
});

export default connect(mapStateToProps, {
    getAllRecommendation,
})(Recommendation);
