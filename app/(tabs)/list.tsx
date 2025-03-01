import { Link } from "expo-router";
import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import Tarefa from "@/data/model/Tarefa";
import { TarefasContext } from "@/context/tarefasContext";
import { flexRow, textWhite, bgRed, gap5, textsize18 } from "@/styles/utility";
import { container, boxAtivity, button, buttonIcon } from "@/styles/components"
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types"; 
import { useRouter } from "expo-router";

export default function App() {
  //const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock)
  const { tarefas, deleteTarefa } = useContext(TarefasContext)!;
  const navigation = useNavigation();
  const router = useRouter();
 
  function deleteItem (tarefa: Tarefa){
    deleteTarefa(tarefa)
  }

  function editItem (tarefa: Tarefa){
    return (
      <Pressable
      style={[buttonIcon]}
      onPress={() => {
        // Navega para a tela de detalhes com o ID da tarefa
        router.push({ pathname: "/(tabs)/edit", params: { id: tarefa.id } });
      }}
    >
      <AntDesign name="edit" size={19} color="white" />
    </Pressable>
    );
  }

  function detailItem(tarefa: Tarefa){
    return (
      <Pressable
      style={[buttonIcon]}
      onPress={() => {
        // Navega para a tela de detalhes com o ID da tarefa
        router.push({ pathname: "/(tabs)/details", params: { id: tarefa.id } });
      }}
    >
      <AntDesign name="eye" size={19} color="white" />
    </Pressable>
    );
  }


  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "center", backgroundColor: "white", padding: 10, margin:10, textAlign:"center"},
    text: {color: "black"}
  })


  return (
    <View style={container}>
      <Text style= {[textsize18]}>ATIVIDADES ACADÊMICAS</Text>
   
    
      {tarefas.map((tarefa) => (
        <View style={[flexRow, boxAtivity]} key={tarefa.id.toString()}>
          <View>
            <Text>{tarefa.title}</Text>
          </View>

          <View style={[flexRow, gap5]}>
            {editItem(tarefa)}
          {detailItem(tarefa)}
            <Pressable style={[buttonIcon, bgRed]} onPress={() => deleteItem(tarefa)}>
              <AntDesign name="delete" size={19} color='white'/>
            </Pressable>
          </View>
       
  
        </View>
      ))}

          <View style={[button]}>
            <Pressable>
              <Link style={[textWhite]} href="/">Voltar</Link>
            </Pressable>      
          </View>
      
    </View>
  );
}


