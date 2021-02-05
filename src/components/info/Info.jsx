import React, {} from "react";
import "./info.css"
import kino from "../../images/kino.jpg";

const Info = () => (

    <div className={"container"}>
      <div className={"image"}>  <img
            src={kino}
            alt="logo"
            style={{height: "260px", width: "460"}}
        />
      </div>

        <div className={"textArea"}>
            <p>Kino CINEMA zlokalizowane jest w Galerii Echo w Kielcach.
            Posiada 5 klimatyzowanych sal wyposażonych w wysokiej klasy
            sprzęt nagłaśniający, dźwięk cyfrowy Dolby 5.1,
            a także srebrne ekrany najwyższej światowej jakości.
            Ponadto kino dysponuje technologią DepthQ, która umożliwia
            osiągnięcie najwyższej precyzji wyświetlania obrazu 3D.
            </p>

            <p>W jednej sali Cinema prezentuje unikalny koncept Cinema Dream,
                będący odpowiedzią na marzenie o komfortowej przestrzeni do
                oglądania filmów w fantastycznej jakości dźwięku i obrazu.
                Wyróżniające się nowoczesnym designem, wyposażone w wygodne,
                skórzane fotele z regulacją siedzeń, system dźwięku Dolby
                Atmos i obraz w rozdzielczości 4K sale, wyznaczają nowe
                standardy odbioru filmu w kinie.</p>

            <p>    Poza regularnym repertuarem, w którym prezentowane są
                największe hity światowej kinematografii, Cinema prezentuje
                swoim Widzom także seanse specjalne takie jak: Kino na Temat
                czy Kultura Dostępna. Kino nie zapomina także o najmłodszych
                Widzach, którym dedykuje liczne wydarzenia specjalne organizowane
                cyklicznie w ramach projektu CINEMA dla Dzieci.</p>

            <p>    Gości przyciąga znakomita atmosfera towarzysząca wszystkim
                pokazom filmowym oraz repertuar, w którym każdy Widz znajdzie
                coś dla siebie. W kinie funkcjonuje także CINEMA Café, w której
                można napić się aromatycznej kawy w wielu smakach oraz bar kinowy,
                który oferuje Widzom świeży popcorn, napoje oraz duży wybór słodyczy.</p></div>
    </div>

)

export default Info;
