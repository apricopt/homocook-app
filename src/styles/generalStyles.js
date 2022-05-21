import {StyleSheet} from 'react-native'


export default StyleSheet.create({
    btnPrimary : {
        margin:3,
        backgroundColor : "#ffd90c",
        width:"100%",
        height: 40,
        justifyContent: "center",
         shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation:4, 
    },
    btnText : {
        

        color: "black",
        textAlign:"center",
        fontSize:20,
        justifyContent: "center"
    },
    linkText : {
        color : "#ffd90c",
        marginVertical: 29,
    },
    linkTextDark : {
        color : "blue",
        marginVertical: 29,
        textDecorationLine: "underline"
    },
    primaryInput: {
        height: 40,
        width: "100%",
        backgroundColor: "#565656",
        borderBottomColor: "#ffd90c",
        borderBottomWidth: 2,
        color: "white",
        paddingHorizontal: 15
    },
    primaryInputLight: {
        height: 35,
        width: "100%",
        backgroundColor: "#fff",
        borderBottomColor: "#ffd90c",
        borderBottomWidth: 2,
        color: "black",
        paddingHorizontal: 15
    },
    textDanger :  {
        color:"red",
        paddingVertical: 5,
    
    },
    lightIcon: {
        margin:10,
        color:"#ffd90c"
    },
    darkIcon: {
        margin:10,
        color:"#3d3d3b"
    }

})
