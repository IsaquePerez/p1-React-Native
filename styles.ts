import {Platform,StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#232323',
        paddingTop: 20,
        paddingHorizontal: 15
    },
    imageLogo: {
        //tintColor: "#f00",
        width: 40,
        height: 40,        
        borderRadius:20
    },
    image: {
        //tintColor: "#f00",
        width: 150,
        height: 100,     
        marginTop: 5,
        borderRadius: 10
    },
    barraInicial:{
        flexDirection:'row'
    },
    text:{
        color: "#fff",        
    },
    textBold:{
        color: "#fff",
        fontWeight: 'bold'
    },    
    lupaUsuario:{
        paddingLeft:210,
        flexDirection:'row'
    },
    lupa:{
        paddingTop:10
    },
    usuario:{
        marginLeft:20
    }
});