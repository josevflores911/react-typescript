import React from "react";
import DB from "../../utils/database";


function Lista() {
    const tarefas = DB;
    return (
        <aside>
            <h2>Day Studies</h2>
            <ul>
                {
                    tarefas.map((act, index) => (
                        <li key={index}>
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