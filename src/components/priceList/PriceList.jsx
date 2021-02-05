import React, { Component } from "react";
import "./priceList.css";


const PriceList = () => (

            <div className={"container"}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">BILET</th>
                        <th scope="col">Normalny</th>
                        <th scope="col">Ulgowy</th>
                        <th scope="col">3D</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Pon-Czw</th>
                        <td>22 zł</td>
                        <td>19 zł</td>
                        <td>25 zł</td>
                    </tr>
                    <tr>
                        <th scope="row">Pt-Nd</th>
                        <td>26 zł</td>
                        <td>22 zł</td>
                        <td>28 zł</td>
                    </tr>
                    </tbody>
                </table>
            </div>

)

export default PriceList;
