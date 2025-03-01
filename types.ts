// types.ts
export type RootStackParamList = {
    Home: undefined; // A tela Home não recebe parâmetros
    Details: { id: string }; // A tela Details recebe um parâmetro `id`
  };