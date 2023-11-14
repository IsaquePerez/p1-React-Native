import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, TextInput,} from "react-native";
import { styles } from "./styles";
import Categorias from "../../../components/Categorias/ImageCategoria"
import Seta from "../../assets/seta.png"
import lupa from "../../assets/lupa.png"

export const Category = () =>{
    
    const [clicarTudo,setClicarTudo] = useState(false)
    const [clicarAnimes,setClicarAnimes] = useState(false)
    const [clicarMangas,setClicarMangas] = useState(false)
    
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
                <View style={{flexDirection:'row', paddingLeft:10,paddingBottom:5}}>
                    <TouchableOpacity style={{paddingTop:15}}>
                        <Image 
                            source={Seta}            
                            style={{width:20, height:20, marginLeft: 10}}/>
                    </TouchableOpacity>
                    <View style={{margin:10,flexDirection:'row',backgroundColor:"#1f1f1f",borderRadius:15,padding:7,width:350}}>                
                        <Image
                            source={lupa}
                            style={{width:20, height:20}}
                        />
                        <TextInput                                                     
                            placeholder = "O que está procurando?"
                            placeholderTextColor={"#505050"}
                            style={{color:"#fff", width:300, height:20, paddingLeft:5}}
                        />
                    </View>
                </View>
            <View style={{flexDirection:'row', marginLeft: 10}}>
                <TouchableOpacity style={clicarTudo?styles.buttonTudo:styles.buttonTudoWhite} onPress={clicarButtonTudo}>                
                    <Text style={{fontSize:15,color:"#000000", fontWeight: 'bold'}}>Tudo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={clicarAnimes?styles.buttonAnimes:styles.buttonAnimesWhite} onPress={clicarButtonAnimes}>
                    <Text style={{fontSize:15,color:"#646464", fontWeight: 'bold', }}>Animes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={clicarMangas?styles.buttonMangas:styles.buttonMangásWhite} onPress={clicarButtonMangas}>
                    <Text style={{fontSize:15,color:"#646464", fontWeight: 'bold',}}>Mangás</Text>
                </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
                <Text style={{fontSize:30, color:"#fff", fontWeight: 'bold', marginLeft: 10}}>Categorias</Text>
                <Categorias/>
            </View>
        </View>
    )
};

