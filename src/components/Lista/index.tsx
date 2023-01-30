import React from "react";
import DB from "../../utils/database";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista() {
    const tarefas = DB;
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