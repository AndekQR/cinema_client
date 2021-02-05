import React, {Component} from "react";
import {Link} from "react-router-dom";
import zdjecie2 from "../../images/zdjecie2.jpg";

import card_zdj1 from "../../images/card_zdj1.jpg";
import card_zdj2 from "../../images/card_zdj2.jpg";
import card_zdj3 from "../../images/card_zdj3.jpg";

import "./mainPage.css";

class MainPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="main-content">
                        <button type="button"  class="btn btn-secondary btn-lg" ><a href="/login">Zaloguj się</a>
                        </button>

                    <hr className="featurette-divider"/>
                    <div className="row-featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">
                                Super oferta
                            </h2>
                            <p className="lead">
                                KINOWE EMOCJE W NIŻSZEJ CENIE | Bilety już od 14,90 zł
                            </p>
                            <button type="button" className="btn btn-info shadow">
                                <Link to="/repertuar">
                                    Sprawdź repertuar
                                </Link>
                            </button>
                        </div>
                        <div className="col-md-5">
                            <img
                                src={zdjecie2}
                                alt="logo"
                                className="featurette-image img-fluid mx-auto"
                                style={{height: "260px", width: "460"}}
                            />
                        </div>
                    </div>
                    <hr className="featurette-divider"/>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card border-light h-100">
                                <img src={card_zdj1} className="card-img-top" alt="card_zdj1"/>
                                <div className="card-body">
                                    <h5 className="card-title">DZIEŃ ILUZJONISTY, czyli MAGIA na wielkim ekranie</h5>
                                    <p className="card-text">
                                        Sztuczki, króliki, kapelusze...
                                    </p>
                                    <Link to="/baza-zaginionych/panel-ludzi">
                                        <button type="button" className="btn btn-link">Czytaj więcej</button>
                                    </Link>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        <button type="button" className="btn btn-secondary btn-sm" disabled>News
                                        </button>
                                        28 Sty 2021</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-light h-100">
                                <img src={card_zdj2} className="card-img-top" alt="card_zdj2"/>
                                <div className="card-body">
                                    <h5 className="card-title">Nasze kino wspiera WOŚP</h5>
                                    <p className="card-text">
                                        Gramy jak co roku!
                                    </p>
                                    <Link to="/baza-zaginionych/panel-ludzi">
                                        <button type="button" className="btn btn-link">Czytaj więcej</button>
                                    </Link>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        <button type="button" className="btn btn-secondary btn-sm" disabled>News
                                        </button>
                                        18 Sty 2021</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-light h-100">
                                <img src={card_zdj3} className="card-img-top" alt="card_zdj3"/>
                                <div className="card-body">
                                    <h5 className="card-title">KINOWE EMOCJE W NIŻSZEJ CENIE | Bilety już od 14,90
                                        zł</h5>
                                    <p className="card-text">
                                        Zapraszamy do naszego kina w Bydgoszczy!
                                    </p>
                                    <Link to="/baza-zaginionych/panel-ludzi">
                                        <button type="button" className="btn btn-link">Czytaj więcej</button>
                                    </Link>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        <button type="button" className="btn btn-secondary btn-sm" disabled>News
                                        </button>
                                        24 Wrz 2020</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="featurette-divider"/>
                </div>
            </div>
        );
    }
}

export default MainPage;
