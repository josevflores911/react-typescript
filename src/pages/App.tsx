import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Form';
import Lista from '../components/Lista';
import { ITarefa } from '../types/ITarefa';
import DB from '../utils/database';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>(DB);
  const [seleccionado, setSeleccionado] = useState<ITarefa>();

  function seleccionarTarefa(tarefaSeleccionada: ITarefa) {
    setSeleccionado(tarefaSeleccionada);
    setTarefas(oldJob => oldJob.map(job => ({
      ...job
      , seleccionado: job.id === tarefaSeleccionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if (seleccionado) {
      setSeleccionado(undefined)
      setTarefas(oldJob => oldJob.map(job => {
        if (job.id === seleccionado.id) {
          return {
            ...job, seleccionado: false, completado: true
          }
        }
        return job;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        seleccionaTarefa={seleccionarTarefa}
      />
      <Cronometro
        seleccionado={seleccionado}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
