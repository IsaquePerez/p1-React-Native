import React, {useState, useEffect} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons'; 
import Overlord  from "./Overlord.png"
import shakuganNoShana from "./shakugan-no-shana.jpg"
import usuario from "./Screenshot_5.png"


const App = () => {
  
  return (
    <View style={styles.container}>    
      <View style={styles.barraInicial}>
        <Image source={Overlord} style={styles.imageLogo}/>      
        <View style={styles.lupaUsuario}>
          <Entypo style={styles.lupa} name="magnifying-glass" size={20} color="#fff" />
          <Image source={usuario} style={[styles.imageLogo,styles.usuario]}/>
        </View>
      </View>
      <View>
        <Text style={styles.textBold}>Em alta</Text>  
      </View>      
      
        <View>
          <Image source={shakuganNoShana} style={styles.image}></Image>
        </View>
     

      <View>
        <Text style={styles.textBold}>Novos episódios</Text>
        <Image source={shakuganNoShana} style={styles.image}></Image>
      </View>
      <View>
        <Text style={styles.textBold}>Recém adicionados</Text>
        <Image source={shakuganNoShana} style={styles.image}></Image>
      </View>
    </View>
  );
}
export default App;


