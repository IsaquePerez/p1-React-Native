import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000000',
        paddingTop: 20,
        paddingHorizontal: 15
    },
    
    image: {
        //tintColor: "#f00",
        width: 150,
        height: 100,     
        marginTop: 5,
        borderRadius: 10
    },
    barraInicial:{
        flexDirection:'row',        
    },
    text:{
        color: "#fff",        
    },
    textBold:{
        color: "#fff",
        fontSize:18,        
        fontWeight: 'bold',
        paddingTop: 8,
        paddingBottom:8
    },    
    
    
    barraInferiorTexto:{
        color: "#727272"
    },
    navBar:{
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:"space-around"
    },
    iconeNavBar:{
        width: 30, 
        height: 30
    }
});