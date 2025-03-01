import { View, Text, Pressable, TextInput } from "react-native"
import { useLocalSearchParams, router } from "expo-router";
import { title, textInput, button, buttonIcon } from "@/styles/components";
import { textWhite, textCenter } from "@/styles/utility";
import { useState } from "react";
import { useContext } from "react";
import { TarefasContext } from "@/context/tarefasContext";
import { MaskedTextInput } from "react-native-mask-text";


export default function edit(){
    const {id} = useLocalSearchParams()
    const {tarefas, editTarefa} = useContext(TarefasContext)!;

    const tarefa = tarefas.find((t) => t.id === id)
    const idTarefa = tarefa?.id

    const validateDate = (text: string) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        return regex.test(text);
      };
    

    const [inputTitle, setInputTitle] = useState(tarefa?.title || "" )
    const [inputProfessor, setInputProfessor] = useState(tarefa?.professor || "")
    const [inputDate, setInputDate] = useState("")
    const [inputDescricao, setInputDescricao] = useState(tarefa?.descricao || "")


    
    function editAtividade(){
        if(tarefa){
            const tarefaEditada = {
                ...tarefa,
                title: inputTitle,
                professor: inputProfessor,
                data: new Date(inputDate),
                descricao: inputDescricao
            }
            editTarefa(tarefaEditada)
            router.back()
        }
    }

    return (
        <View>
                <Text style={title}>CADASTRO DE ATIVIDADES</Text>
                
                <Text>Título da Atividade</Text>
                <TextInput
                    style={textInput}
                    value={inputTitle}
                    onChangeText={setInputTitle}
                />
                
                <Text>Professor responsável</Text>
                <TextInput
                    style={textInput}
                    value={inputProfessor}
                    onChangeText={setInputProfessor}
                />
            

                <Text>Data da Atividade</Text>
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
                
            
                <Text>Descrição</Text>
                       <TextInput
                      style={textInput}
                      value={inputDescricao}
                      onChangeText={setInputDescricao}
                />
                
                <Pressable style={[button]} onPress={()=>editAtividade()}>
                        <Text style={[textWhite, textCenter]}>Confirmar</Text>
                </Pressable>
        </View>
    )
}