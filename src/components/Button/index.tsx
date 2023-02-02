import React from 'react';
import style from './Button.module.scss'

interface IProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}

class Botao1 extends React.Component<IProps> {
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}> {this.props.children}</button>
        )
    }
}
//---------------------------------------------------
interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao}>{children}</button>
    )
}

export default Botao;