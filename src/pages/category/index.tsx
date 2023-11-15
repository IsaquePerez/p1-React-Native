import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView} from "react-native";
import { styles } from "./styles";
import Categorias from "../../components/Categorias/ImageCategoria"
import Seta from "../../assets/seta.png"
import lupa from "../../assets/lupa.png"

export const Category = ({navigation}:any) =>{
    
    const [clicarTudo,setClicarTudo] = useState(false)
    const [clicarAnimes,setClicarAnimes] = useState(true)
    const [clicarMangas,setClicarMangas] = useState(true)
    
    const clicarButtonTudo = () =>{
        setClicarTudo(!clicarTudo);
    }
    const clicarButtonAnimes = () =>{
        setClicarAnimes(!clicarAnimes);
    }
    const clicarButtonMangas = () =>{
        setClicarMangas(!clicarMangas);
    }    
    return(
        <View style={styles.container}>
                <View style={styles.navBarTop}>
                    <TouchableOpacity style={{paddingTop:15}}>
                        <Image 
                            source={Seta}            
                            style={styles.imageSeta}/>
                    </TouchableOpacity>
                    <View style={styles.lupaInput}>                                       
                        <Image
                            source={lupa}
                            style={styles.imageLupa}  
                                                                                  
                        />                        
                        <TextInput                                                     
                            placeholder = "O que está procurando?"
                            placeholderTextColor={"#505050"}
                            style={styles.input}
                        />
                    </View>
                </View>
            <ScrollView>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={clicarTudo?styles.buttonTudo:styles.buttonTudoWhite} onPress={clicarButtonTudo}>                
                        <Text style={styles.button}>Tudo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={clicarAnimes?styles.buttonAnimes:styles.buttonAnimesWhite} onPress={clicarButtonAnimes}>
                        <Text style={styles.buttonCinza}>Animes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={clicarMangas?styles.buttonMangas:styles.buttonMangásWhite} onPress={clicarButtonMangas}>
                        <Text style={styles.buttonCinza}>Mangás</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin:10}}>
                    <Text style={styles.categorias}>Categorias</Text>
                    <Categorias/>
                </View>
            </ScrollView>
        </View>
    )
};

