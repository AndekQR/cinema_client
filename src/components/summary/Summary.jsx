import React from "react"
import "./summary.css"

const Summary = () => (
    <div className={"body"}>
        <div className={"header"}>  
            
            <ul className={"menu"}>
            <li className={"menu"}>
                <a className="menu-link" href="#">CINEMA</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="#">REPERTUAR</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="#">CENNIK</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="">KINO</a>
            </li>
            <li className={"menu"}>
                <a className="menu-link" href="#">Informacja 600 500 300</a>
            </li>
            </ul>

        </div>

     <div className={"steps"}>
     <ul className={"steps"}>
         <li className={"steps"}>
             <h5>Krok 1</h5>
             <h5>Wybór miejsca</h5>
         </li>
             <li className={"steps"}>
             <h5>Krok 2</h5>
             <h5>Podsumowanie</h5>
         </li>
             <li className={"steps"}>
             <h5 style={{fontWeight: "bolder"}}>Krok 3</h5>
             <h5 style={{fontWeight: "bolder"}}>Dane osobowe</h5>
         </li>
         <li className={"steps"}>
             <h5>Krok 4</h5>
             <h5>Potwierdzenie</h5>
         </li>
     </ul>
     </div>

  
    
    <div >
        <h1 style={{textAlign: "center"}}>Dziękujemy za rezerwację i zapraszamy do kina!</h1>
        <button type="submit" style={{margin: "0 auto"}}>Powrót do strony głównej</button>
        
   </div>
    

    </div>
)

export default Summary