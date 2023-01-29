import React from "react";
import Botao from "../Button";

class Formulario extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div>
                    <label htmlFor="tarea">
                        Add a new study
                    </label>
                    <input type="text" name="tarea" id="tarea" placeholder="what do you want to study" required />
                </div>
                <div>
                    <label>

                    </label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required />
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;