import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function AssetExample() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph1}>
        Sobre Nós
      </Text>
      <Text style={styles.paragraph}>
        Essa é a página de Sobre Nós, a tela que explica sobre TUDO que há de melhor em nossa empresa
      </Text>
    
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Services")}>
      <Text style={styles.btnText}> Ir para Serviços </Text>
       </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "#b3d0ff",
    height: "100%",
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',

  },

    paragraph1: {
    margin: 24,
    marginTop: 0,
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  btnText: {
    color: "white"
  },

  btn: {
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#0d6aff"

  }
});