import React from 'react';
import Button from '../Button';
import Relogio from './Relogio';
import style from './Cronometro.module.scss'

export function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha una card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button>Comecar</Button>
        </div>
    )
}