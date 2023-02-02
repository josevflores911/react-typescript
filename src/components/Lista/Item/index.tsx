import { ITarefa } from "../../../types/ITarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
    seleccionaTarefa: (tarefaSeleccionada: ITarefa) => void
}

export default function Item({
    tarefa,
    tempo,
    seleccionado,
    completado,
    id,
    seleccionaTarefa
}: Props) {
    console.log({ tarefa, tempo, seleccionado, completado, id })
    return (
        <li className={`${style.item} ${seleccionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={() => !completado && seleccionaTarefa({ tarefa, tempo, seleccionado, completado, id })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}