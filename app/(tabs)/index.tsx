import { Link } from "expo-router";
import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView, TextInput } from "react-native";
import tarefasMock from "@/data/constants/tarefas";
import Tarefa from "@/data/model/Tarefa";
import { TarefasContext } from "@/context/tarefasContext";
import { flexRow, textWhite, textLeft } from "@/styles/utility";
import { container, title, textInput, button } from "@/styles/components"
import { MaskedTextInput } from "react-native-mask-text";

export default function App() {
  const { adicionarTarefa } = useContext(TarefasContext)!;
  const [inputTitle, setInputTitle] = useState("")
  const [inputProfessor, setInputProfessor] = useState("")
  const [inputDate, setInputDate] = useState("")
  const [inputDescricao, setInputDescricao] = useState("")
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock)

  const validateDate = (text: string) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regex.test(text);
  };

  function addAtividade(){
      if (inputTitle.trim() === ''){
          alert("Preencha os campos necessários!")
          return
      }
      const novaAtividade: Tarefa = {
        id: (tarefas.length + 1).toString(),
        title: inputTitle,
        professor:  inputProfessor,
        data: new Date("2024-04-15T10:30:00Z"),
        descricao: inputDescricao,
      }

      alert("Atividada cadastrada!")
      adicionarTarefa(novaAtividade)
      setInputTitle("")
      setInputDate("")
      setInputProfessor("")
      setInputDescricao("")
  }

  return (
   
    <View style={container}>

      <Text style={title}>CADASTRO DE ATIVIDADES</Text>

      <Text style={textLeft}>Título da Atividade</Text>
      <TextInput
        style={textInput}
        value={inputTitle}
        onChangeText={setInputTitle}
      />

      <Text style={textLeft}>Professor responsável</Text>
       <TextInput
        style={textInput}
        value={inputProfessor}
        onChangeText={setInputProfessor}
      />

<Text style={textLeft}>Data da Atividade</Text>
<MaskedTextInput
  style={textInput}
  mask="99/99/9999"
  keyboardType="numeric"
  value={inputDate}
  onChangeText={setInputDate}
/>

{inputDate && !validateDate(inputDate) && (
  <Text style={{ color: "red" }}>Data inválida!</Text>
)} 

    <Text style={textLeft}>Descrição</Text>
       <TextInput
      style={textInput}
      value={inputDescricao}
      onChangeText={setInputDescricao}
      />

      <Pressable style={[button]} onPress={()=>addAtividade()}>
        <Text style={textWhite}>Adicionar</Text>
      </Pressable>

      <View>
        <Link href="/(tabs)/list">
          <Text>  Visualizar tarefas cadastradas </Text>
        </Link>
      </View>

    </View>
  );
}


