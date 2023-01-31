import React from "react";
import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Day Studies</h2>
            <ul>
                {
                    tarefas.map((activities) => (
                        <Item key={activities.id}
                            {...activities}
                        />
                    ))
                }

            </ul>
        </aside>
    )
}

export default Lista;