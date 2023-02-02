import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[];
    seleccionaTarefa: (tarefaSeleccionada: ITarefa) => void
}

function Lista({ tarefas, seleccionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Day Studies</h2>
            <ul>
                {
                    tarefas.map((activities) => (
                        <Item key={activities.id}
                            seleccionaTarefa={seleccionaTarefa}
                            {...activities}
                        />
                    ))
                }

            </ul>
        </aside>
    )
}

export default Lista;