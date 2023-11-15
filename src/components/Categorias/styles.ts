import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    cardImage:{
        width: 90, 
        height: 120, 
        borderRadius: 5,
        transform: "rotate(30deg)", 
        position:"absolute",
        right:0
    },
    cardCategorias:{
        margin:7, 
        flexDirection:'row',         
        justifyContent:"flex-start",
        borderRadius:10, 
        width:"47%", 
        height:100, 
        position:"relative", 
        overflow:"hidden"
    },
    cardCategoriasText:{
        fontSize:18,
        color:"#fff", 
        paddingTop:35, 
        paddingLeft:12, 
        fontWeight: 'bold',
    }
});