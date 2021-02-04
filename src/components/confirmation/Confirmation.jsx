import React from "react";
import ConfirmationResult from "./ConfirmationResult";

const Confirmation = (props) => {
  let results = props.selectedSeats.map((result) => {
    return <ConfirmationResult key={result.id} result={result} />;
  });

  return (
    <div>
      <h1>WONDER WOMAN</h1>
      <h1>1984 / dubbing</h1>
      <span>data: 31.12.2020 / godzina: 20:00 / sala: 2</span>
      <hr />
      {results}
      <div class="row justify-content-md-right">
        <div class="col">Cena łączna: 43.00 PLN</div>
      </div>
    </div>
  );
};

export default Confirmation;
