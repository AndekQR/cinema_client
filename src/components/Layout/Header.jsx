import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css"

class Header extends Component {
  render() {
    return (
      <div className={"header"}>
        <ul className={"menu"}>
          <li className={"menu"}>
            <a className="menu-link" >
            <Link to = "/"> 
              CINEMA
              </Link>
            </a>
          </li>
          <li className={"menu"}>
            <a className="menu-link" >
            <Link to = "/repertuar"> 
              REPERTUAR
              </Link>
            </a>
          </li>
          <li className={"menu"}>
            <a className="menu-link" >
              CENNIK
            </a>
          </li>
          <li className={"menu"}>
            <a className="menu-link">
              KINO
            </a>
          </li>
          <li className={"menu"}>
            <a className="menu-link" >
              Informacja 600 500 300
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
