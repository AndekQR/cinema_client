import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className={"header"}>
        <ul className={"menu"}>
          <li className={"menu"}>
            <Link className="menu-link" to="/">
              CINEMA
            </Link>
          </li>
          <li className={"menu"}>
            <Link className="menu-link" to="/repertuar">
              REPERTUAR
            </Link>
          </li>
          <li className={"menu"}>
            <Link className="menu-link" to="/recommendation">
              REKOMENDACJE
            </Link>
          </li>
          <li className={"menu"}>
            <Link className="menu-link" to="/pricelist">
              CENNIK
            </Link>
          </li>
          <li className={"menu"}>
            <Link className="menu-link" to="/info">
              {" "}
              KINO
            </Link>
          </li>
          <li className={"menu"}>
            <a className="menu-link">Informacja 600 500 300</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
