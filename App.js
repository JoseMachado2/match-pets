import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, Button, TouchableOpacity, Alert } from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function App() {

  const [raca, setRaca] = useState('')
  const [on, setOn] = useState(false)
  const [image, setImage] = useState([
    { foto: require('./assets/alemao.jpg'), nome: 'Bob', anos: '3 anos', raca: 'Alemão', sexo: 'M', key: 1 },
    { foto: require('./assets/dalm.jpg'), nome: 'Rex', anos: '6 anos', raca: 'Dalmata', sexo: 'M', key: 2 },
    { foto: require('./assets/poddle.jpg'), nome: 'Maggie', anos: '4 anos', raca: 'Poodle', sexo: 'F', key: 3 },
    { foto: require('./assets/image2.jpg'), nome: 'Mel', anos: '2 anos', raca: 'Beagle', sexo: 'F', key: 4 },
  ])

  function Verificar() {
    setOn(!on)
  }

  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Image style={styles.logo} source={require("./assets/cape.jpg")} />
        <Text style={styles.item}>Match Pets</Text>
        <Octicons name="gear" size={30} color="black" />
      </View>

      <ScrollView style={styles.principal}>


        <View style={styles.barrapesquisa}>
          <TextInput
            style={styles.input}
            placeholder="Digite a raça..."
            placeholderTextColor={"gray"}
            onChangeText={(racatal) => { setRaca(racatal), setOn(false) }}
          />
          <View style={styles.buttonContainer}>
            <Button title="BUSCAR" color='#ab0286' onPress={Verificar} />
          </View>
        </View>

        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.key}
          data={image}
          renderItem={({ item }) => (
            on ? [

              item.raca == raca ?
                < View style={styles.dogs} >
                  <View style={styles.dogs2}>
                    <Text>{item.nome}</Text>
                    <Image style={styles.dog} source={item.foto} />
                    <Text>{item.anos}</Text>
                    <Text>{item.sexo}</Text>
                    <Text>{item.raca}</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => Alert.alert('DEU LIKE!')}
                  >
                    <Image style={styles.image} source={require("./assets/like.png")} />

                  </TouchableOpacity>


                  <TouchableOpacity
                    onPress={() => Alert.alert('DEU DISLIKE!')}
                  >
                    <Image style={styles.image} source={require("./assets/dislike.jpg")} />

                  </TouchableOpacity>

                </View>

                :

                <Text></Text>
            ]
              :

              <Text></Text>
          )}
        />

      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
  },

  item: {
    paddingTop: 5,
    fontSize: 20,
    color: "#ff3399",
    fontWeight: "bold",
  },

  barra: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 50,
    borderWidth: 1,
    borderColor: "#ff3399",
  },
  logo: {
    width: 40,
    height: 40,
  },

  dog: {
    width: 140,
    height: 200,
    borderWidth: 4,
    borderColor: "#ff3385",
    borderRadius: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 290,
    height: 33,
  },

  barrapesquisa: {
    alignItems: "center",
    justifyContent: "center",
  },

  principal: {
    backgroundColor: "pink",
  },

  dogs: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 15,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },

  dogs2: {
    flexDirection: "column",
    borderColor: "#777",
    width: 150,
    alignItems: "center",
  },

  buttonContainer: {
    backgroundColor: 'blue'
  },

});