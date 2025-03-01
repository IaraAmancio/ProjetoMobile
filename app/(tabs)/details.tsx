import { View } from "react-native"
import { TarefasContext } from "@/context/tarefasContext";
import { useContext } from "react";
import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { container, button, title } from "@/styles/components";
import { Pressable } from "react-native";
import { Link } from "expo-router";
import { textWhite } from "@/styles";


export default function Details (){
    const params = useLocalSearchParams();
    const { id } = params;
    const {tarefas} = useContext(TarefasContext)!;

    const tarefa = tarefas.find((t) => t.id == id)
    const dataFormatada = tarefa?.data.toLocaleDateString("pt-BR"); // Formato brasileiro

    return (
        <View style={[container]}>
                <View>
                    <Text style={title}>ATIVIDADE</Text>

                    <Text>Título: {tarefa?.title}</Text>
                    <View style={{ height: 1, backgroundColor: "#3b3a38", width: "100%", marginVertical: 10 }} />

                    <Text>Professor orientador: {tarefa?.professor}</Text>
                    <View style={{ height: 1, backgroundColor: "#3b3a38", width: "100%", marginVertical: 10 }} />

                    <Text>Data: {dataFormatada} </Text>
                    <View style={{ height: 1, backgroundColor: "#3b3a38", width: "100%", marginVertical: 10 }} />

                    <Text>Descrição: {tarefa?.descricao}</Text>
                </View>
                <View style={[button]}>
                    <Pressable>
                      <Link style={[textWhite]} href="/">Voltar</Link>
                    </Pressable>      
                </View>
        </View>
    )
}