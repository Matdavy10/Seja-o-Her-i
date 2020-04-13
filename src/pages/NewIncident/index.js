import React from "react"
import logoImg from "../../assets/logo.svg"
import {Link} from "react-router-dom"
import {FiArrowLeft} from "react-icons/fi"

import "./styles.css"

export default function Incidents(){
    return (
        <div className="register-container">

        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16}  color="#E02041"/>
                     Voltar
                </Link>
            </section>

            <form>
                <input placeholder ="Titulo do caso"/>
                <input type="description" className="description" placeholder="Descreva o caso"/>
                <input placeholder="Valor em reais"/>
                <button className="button-cancelar" type="submit">Cancelar</button>
                <button className="button-cadastrar" type="submit">Cadastrar</button>
           
                



            </form>
        </div>
    </div>
    )
}