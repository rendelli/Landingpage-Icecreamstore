import React from "react";
import "./style.css";

const Rodape = () => (
    <footer>
        <div className="footer-div-info">
            <img src="assets/logo.png" alt="logomarca"/>
            <div className="footer-info">
                <h3>Endereco</h3>
                <p>Av. Bernardinho de Campos, 98</p>
                <p>Sao Paulo, SP - 1234-000</p>
            </div>
            <div className="footer-info">
                <h3>Contato</h3>
                <p>info@gmail.com</p>
                <p>Tel:  (11)1111-22222</p></div>
            <div className="footer-info">
                <h3>Horario</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>

        <div><p>Gelateria. Orgulhosamente desenvolvido por "Gabriel Rendelli"</p></div>
    </footer>
);



export default Rodape;