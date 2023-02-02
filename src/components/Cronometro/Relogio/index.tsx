import React from "react";
import style from './Relogio.module.scss'

interface Props {
    tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
    const minutos = Math.floor(tempo / 60)
    const seg = tempo % 60;
    const [minDec, minUni] = String(minutos).padStart(2, '0');
    const [segDec, segUni] = String(seg).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{minDec}</span>
            <span className={style.relogioNumero}>{minUni}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segDec}</span>
            <span className={style.relogioNumero}>{segUni}</span>
        </>
    )
}