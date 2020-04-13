import React from "react"
import { FiLogIn } from "react-icons/fi"
import { Link } from "react-router-dom"
import "./style.css"

import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"

export default function Logon(){
    return(
        <div className="Logon-container">
             <section className="form">
                <img src={logoImg} alt="logo be the hero"/>
                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder ="sua ID"/>
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="../Register/index">
                        <FiLogIn size={16}  color="#E02041"/>
                         Não tenho cadastro
                    </Link>
                </form>
             </section>
             <img src={heroesImg}></img>
        </div>
       
)
   
}