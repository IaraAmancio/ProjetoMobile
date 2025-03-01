import React from 'react';
import { Link, Tabs } from 'expo-router';
import { TarefasProvider } from '@/context/tarefasContext';

export default function TabLayout() {


  return (
    <TarefasProvider>
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Página Inicial',
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'Lista de Tarefas',
        }}
      />
    </Tabs>
  </TarefasProvider>
  );
}
