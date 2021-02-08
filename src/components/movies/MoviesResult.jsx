import React, {Component} from "react";
import {Link} from "react-router-dom";
import defaultCover from "./../../images/default.jpg"

class MoviesResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: defaultCover
        }
    }

    componentDidMount() {
        const url = this.props.result.posteUrl
        this.setImageUrl(url)
    }


    setImageUrl = (url) => {

        if (!url) return false

        return fetch(url, {method: "HEAD"})
            .then(res => {
                if (res.ok) this.setState({imageUrl: url})
            })
            .catch(_ => false)

    }

    render() {
        const {result} = this.props;
        return (
            <React.Fragment>
                <Link
                    to={{
                        pathname: "/test",
                        state: {name: "jack", age: 25, city: "Antwerp"},
                    }}
                    style={{textDecoration: "none"}}
                >
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={this.state.imageUrl}
                                    alt="..."
                                    style={{height: "450px", width: "300px"}}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{result.title}</h5>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Reżyser: {result.director}
                                        </small>
                                        <br/>
                                        <small className="text-muted">
                                            Obsada: {result.actors}
                                        </small>
                                        <br/>
                                        <small className="text-muted">
                                            Rok wydania: {result.year}
                                        </small>
                                        <br/>
                                        <small className="text-muted">
                                            Długość: {result.runTimeMin}min
                                        </small>
                                        <br/>
                                    </p>
                                    <p className="card-text">{result.plot}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        );
    }
}

export default MoviesResult;
