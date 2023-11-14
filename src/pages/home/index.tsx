import React, {useState, useEffect} from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons'; 
import Overlord  from "../../assets/Overlord.png"
import usuario from "../../assets/Screenshot_5.png"
import inicio from "../../assets/inicio.png"
import inicio02 from "../../assets/inicio02.png"
import livro from "../../assets/livro.png"
import livro02 from "../../assets/livro02.png"
import estrela from "../../assets/estrela.png"
import estrela02 from "../../assets/estrela02.png"
import menu from "../../assets/menu.png"
import menu02 from "../../assets/menu02.png"
import Carousel from "../../../components/Carrosel/ImageCarrosel"

export const Home = () => {
  
  return (
    <View style={styles.container}>    
      <View style={styles.barraInicial}>
        <Image source={Overlord} style={styles.imageLogo}/>
        <View style={styles.lupaUsuario}>
          <Entypo style={styles.lupa} name="magnifying-glass" size={20} color="#fff" />
          <Image source={usuario} style={[styles.imageLogo,styles.usuario]}/>
        </View>
      </View>
      <ScrollView >
        <View>
          <Text style={styles.textBold}>Em alta</Text>  
          <Carousel/>
        </View>      
        <View>
          <Text style={styles.textBold}>Novos episódios</Text>
          <Carousel/>
        </View>
        <View>
          <Text style={styles.textBold}>Recém adicionados</Text>
          <Carousel/>
        </View>    
        <View>
          <Text style={styles.textBold}>Recém adicionados</Text>
          <Carousel/>
        </View> 
      </ScrollView>
      <View style={{paddingTop:10,paddingBottom:10, flexDirection:'row', justifyContent:"space-around"}}>
        <View>
          <Image 
          source={inicio}
          style={{ width: 30, height: 30}}
          />
          <Text style={styles.barraInferiorTexto}>Inicio</Text>
        </View>
        <View>
          <Image 
          source={livro}
          style={{ width: 30, height: 30 }}
          />
          <Text style={styles.barraInferiorTexto}>Mangás</Text>
        </View>
        <View>
          <Image 
          source={estrela}
          style={{ width: 30, height: 30}}
          />
          <Text style={styles.barraInferiorTexto}>Favoritos</Text>
        </View>
        <View>
          <Image 
          source={menu}
          style={{ width: 30, height: 30}}
          />
          <Text style={styles.barraInferiorTexto}>Mais</Text>
        </View>
      </View>
    </View>
  );
}


