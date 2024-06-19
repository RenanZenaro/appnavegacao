import { Button, Text, View } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: '', flexDirection: 'row' }}>
      <Text>Home Screen</Text>
      <Button
        title='Equipe'
        onPress={() => props.navigation.navigate('Equipe')}
      />
    </View>
  );
}