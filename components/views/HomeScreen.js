import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={estilos.container}>
      <View style={estilos.botao}>
        <Button
          title='Home'
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button
          title='Equipe'
          onPress={() => props.navigation.navigate('Equipe')}
        />
        <Button
          title='Quem Somos'
          onPress={() => props.navigation.navigate('Quem Somos')}
        />
        <Button
          title='Contato'
          onPress={() => props.navigation.navigate('Contato')}
        />
      </View>
      <View style={estilos.texto}>
        <Text style={{ fontSize: 40, padding: 10, color: 'white' }}>FunBBE</Text>
        <Text style={{ fontSize: 20, color: 'white' }}>Fundação Barra Bonita de Ensino</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#007aff'
  },
  botao: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  texto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%"
  }
})