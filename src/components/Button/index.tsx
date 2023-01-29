import React from 'react';
import style from './Button.module.scss'

class Botao extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={style.botao}> Botao</button>
        )
    }
}

export default Botao;