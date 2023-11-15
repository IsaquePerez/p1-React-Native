import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons'; 
import Overlord  from "../../assets/Overlord.png"
import usuario from "../../assets/Screenshot_5.png"
import {CarouselAdicionados, CarouselAlta, CarouselEpNovo, } from "../../components/Carrosel/ImageCarrosel"
import Header from "../../components/HeaderHome";

export const Home = ({navigation}:any) => {
  
  return (
    <View style={styles.container}>    
      <Header navigation={navigation}/>
      <ScrollView >
        <View>
          <Text style={styles.textBold}>Em alta</Text>  
          <CarouselAlta/>
        </View>      
        <View>
          <Text style={styles.textBold}>Novos episódios</Text>
          <CarouselEpNovo/>
        </View>
        <View>
          <Text style={styles.textBold}>Recém adicionados</Text>
          <CarouselAdicionados/>
        </View>    
        <View>
          <Text style={styles.textBold}>Com dublagem</Text>
          <CarouselAdicionados/>
        </View> 
      </ScrollView>      
    </View>
  );
}


