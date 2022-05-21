import {StyleSheet , Dimensions} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const windowHeight = parseInt(Dimensions.get('window').height);
const windowWidth = parseInt(Dimensions.get('window').width);

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
    screenBody : {flex: 1,
         alignItems: 'center', 
    justifyContent: 'flex-start',
    // backgroundColor: "#5c5c5c"

},
    cardPrimary : {
        margin:3,
        backgroundColor : "#e6e6e6",
        width:"90%",
        height: windowHeight/3 - 50,
        justifyContent: "center",
        alignItems : "center",
         shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation:4, 
    padding : 20,
    },
    cardImg: {
        width: parseInt(windowWidth)/1.6,
      //   height: 300,
      flex: 1,
      justifyContent :"center",
      flexDirection : "row",
    //   backgroundColor: "pink"


      },
      cardInnerContent: {
        flex : 1,
        justifyContent :"center",
        // backgroundColor : "blue"
 
      },
    primaryText : {
        color: "black",
        textAlign:"center",
        fontSize:25,
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
    },
    bannerText :  {
        color:"#E01E1E",
        paddingVertical: 10,
        backgroundColor : "black",
        width : "100%",
        textAlign : "center"

    },

})
