import React from "react";
import {View, Image} from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { styles } from "./styles";
import Overlord from "../../assets/Overlord.png"
import usuario from "../../assets/Screenshot_5.png"

interface HeaderProps {
  navigation: any;
}

const Header: React.FC<HeaderProps> = ({ navigation }: HeaderProps) => {
  return (
    <View style={styles.barraInicial}>
      <Image source={Overlord} style={styles.imageLogo} />
      <View style={styles.lupaUsuario}>
        <Entypo
          style={styles.lupa}
          name="magnifying-glass"
          size={25}
          color="#fff"
          onPress={() => navigation.navigate("Mais")}
        />
        <Image source={usuario} style={[styles.imageLogo, styles.usuario]} />
      </View>
    </View>
  );
};

export default Header;
