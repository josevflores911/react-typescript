import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../Button";
import style from './Form.module.scss'

class Formulario extends React.Component
    <{ setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }> {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        this.props.setTarefas(tarefasantigas => [...tarefasantigas,
        { ...this.state, seleccionado: false, completado: false, id: tarefasantigas.length + 1 }])
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
        console.log({ ...this.state })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarea">
                        Add a new study
                    </label>
                    <input type="text" name="tarea" id="tarea" placeholder="what do you want to study"
                        value={this.state.tarefa} onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })} required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00"
                        value={this.state.tempo} onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })} required />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;