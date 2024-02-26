import React from "react";
//import { Link } from "react-router-dom";
import Topo from '../../components/Topo';
import Rodape from "../../components/Rodape";
import "./style.css";

const Home = () =>(
    <div>
        <Topo />

        <main>
            <section className="secaoBanner">
                <div className="divBanner">
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>

            <section className="secaoSabores">
                <img src="assets/banner-sabores.jpg" alt="sabores-sorvete"></img>
                <div>
                    <h2>Nossos Sabores</h2>
                    <span>Novos e deliciosos</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>

            <section className="secaoEventos">
                <div>
                    <h2>Nossos Eventos</h2>
                    <span>Delicias com sorvete!</span>
                    <p>Mais do que uma sorveteria, uma experiencia da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
                </div>
                <img src="assets/eventos-image.jpg" alt="img-eventos"></img>
            </section>

            <section className='secaoSobre'>
                <img src="assets/sobre-image.jpg" alt="sabores-sorvete"></img>
                <div>
                    <h2>Sobre Nos</h2>
                    <span>Alegria em cada casquinha</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>
        </main>

        <Rodape/>

    </div>

);

export default Home;