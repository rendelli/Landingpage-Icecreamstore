import Topo from "../../components/Topo";
import Rodape from "../../components/Rodape";

import "./style.css";

const Sabores = () => (
    <div>
        <Topo/>

        <main>
            <section className="saborBanner">
                <div className="divSabores">
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>


            <section className="saboresSorvete limitar-secao">
                <h2>SABORES DE SORVETE</h2>
                <div className="deckSabores">
                    <div className="cardsSabores">
                        <img src="./assets/sabor-oreo.png" alt="sorvete-oreo"></img>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma exploso de sabor.</p>
                    </div>

                    <div className="cardsSabores">
                        <img src="./assets/sabor-pistache.png" alt="sorvete-pistache"></img>
                        <h3>Sorvete de Pistache</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma exploso de sabor.</p>
                    </div>

                    <div className="cardsSabores">
                        <img src="./assets/sabor-cookies-avela.png" alt="sorvete-cookies-avela"></img>
                        <h3>Sorvete de Cookies & avela</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma exploso de sabor.</p>
                    </div>

                    <div className="cardsSabores">
                        <img src="./assets/sabor-kiwi.png" alt="sorvete-kiwi"></img>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma exploso de sabor.</p>
                    </div>

                    <div className="cardsSabores">
                        <img src="./assets/sabor-morango.png" alt="sorvete-morango"></img>
                        <h3>Sorvete de Morango</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma exploso de sabor.</p>
                    </div>

                    <div className="cardsSabores">
                        <img src="./assets/sabor-limao.png" alt="sorvete-limao"></img>
                        <h3>Sorvete de Limao Siciliano</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma exploso de sabor.</p>
                    </div>

                </div>

            </section>
        </main>

        <Rodape/>
    </div>

);
export default Sabores;
