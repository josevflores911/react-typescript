import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Relogio from './Relogio';
import style from './Cronometro.module.scss'
import { ITarefa } from '../../types/ITarefa';
import { timeToSec } from '../../common/time';

interface Props {
    seleccionado: ITarefa | undefined;
    finalizarTarefa: () => void;
}

export function Cronometro({ seleccionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (seleccionado?.tempo) {
            setTempo(timeToSec(seleccionado?.tempo))
        }
    }, [seleccionado])

    function regresiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regresiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha una card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Button onClick={() => regresiva(tempo)}>Comecar</Button>
        </div>
    )
}