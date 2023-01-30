import React from "react";
import Botao from "../Button";
import style from './Form.module.scss'

class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarea">
                        Add a new study
                    </label>
                    <input type="text" name="tarea" id="tarea" placeholder="what do you want to study" required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;