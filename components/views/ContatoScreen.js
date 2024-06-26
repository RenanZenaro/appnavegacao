import { Button, StyleSheet, Text, View } from "react-native";

export default function ContatoScreen(props) {
    return (
        <View style={estilos.menu}>
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

        <Text>Contato</Text>
      
    </View>
  );
}

const estilos = StyleSheet.create({

  menu: {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: '',
  flexDirection: 'row'
  }
})