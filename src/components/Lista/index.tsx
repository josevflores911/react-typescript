import React from "react";
import DB from "../../utils/database";
import style from './Lista.module.scss';

function Lista() {
    const tarefas = DB;
    return (
        <aside className={style.listaTarefas}>
            <h2>Day Studies</h2>
            <ul>
                {
                    tarefas.map((act, index) => (
                        <li key={index} className={style.item}>
                            <h3>
                                {act.tarefa}
                            </h3>
                            <span>
                                {act.tempo}
                            </span>
                        </li>
                    ))
                }

            </ul>
        </aside>
    )
}

export default Lista;