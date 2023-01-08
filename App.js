import { StyleSheet, Text, Image, TouchableHighlight, View, ImageBackground,
  Alert,StatusBar,Dimensions,
  SafeAreaView, Button ,Platform} from 'react-native';
  import { useDimensions,useDeviceOrientation 
  } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
export default function App() {
  return (
    
     <ViewImageScreen/>
     
      
     

   
    
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  tinyLogo: {
    width: 100,
    height: 100,
    top: 100,
    left: 170,
    position: "absolute",
    fontSize:50
  },
  subText:{
    color: "black",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    top: 180,
    left: 150,
    position: "absolute",
   

  }

});
