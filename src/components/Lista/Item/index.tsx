import { ITarefa } from "../../../types/ITarefa";
import style from "../Lista.module.scss";

export default function Item({ tarefa, tempo, seleccionado, completado, id }: ITarefa) {
    console.log({ tarefa, tempo, seleccionado, completado, id })
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}