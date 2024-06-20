import { Button, Text, View } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: '', flexDirection: 'row' }}>
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
  );
}