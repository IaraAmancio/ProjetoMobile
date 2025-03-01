import React, { createContext, useState, ReactNode } from "react";
import Tarefa from "@/data/model/Tarefa";
import tarefasMock from "@/data/constants/tarefas";

// Definição do tipo do contexto
interface TarefasContextProps {
  tarefas: Tarefa[];
  adicionarTarefa: (novaTarefa: Tarefa) => void;
  deleteTarefa: (tarefa: Tarefa) => void;
  editTarefa: (tarefaEditada: Tarefa) => void;
}

// Criando o contexto
export const TarefasContext = createContext<TarefasContextProps | undefined>(undefined);

// Provedor do contexto
export const TarefasProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock);

  function adicionarTarefa(novaTarefa: Tarefa) {
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
  }
  function deleteTarefa(tarefa: Tarefa){
    const novaLista = tarefas.filter((t) => t !== tarefa)
    setTarefas(novaLista)
  }
  function editTarefa(tarefaEditada: Tarefa){
    setTarefas(tarefas.map((tarefa) => (
        tarefa.id === tarefaEditada.id? tarefaEditada: tarefa
    )))
  }

  return (
    <TarefasContext.Provider value={{ tarefas, adicionarTarefa, deleteTarefa, editTarefa }}>
      {children}
    </TarefasContext.Provider>
  );
};
