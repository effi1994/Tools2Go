import React from 'react';
import { StyleSheet, Text, View, ImageBackground ,Image} from 'react-native';
function WelcomeScreen(props) {
       return (
              <ImageBackground source={require("../assets/background.jpg")} style={styles.background}>
                 <View style={styles.logoContainer}>
                 <Text style={styles.text} >Sell What You Don't Need</Text>
                 <Image source={require("../assets/logo-red.png")} 
                style={styles.logo}
                />
              </View>    
                <View style={styles.loginButton}></View>
                <View style={styles.registerButton}></View>
               

              </ImageBackground>
       );
}

const styles = StyleSheet.create({
       background: {
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center"
       },
       loginButton: {
              width: "100%",
              height: 70,
              backgroundColor: "#fc5c65"
       },
       registerButton: {
              width: "100%",
              height: 70,
              backgroundColor: "#4ecdc4"
       },
       logo:{
              width: 100,
              height: 100,
              position: "absolute",
              top: 70,

       },
       logoContainer:{
              position: "absolute",
              top: 70,
              alignItems: "center"
       },
       text:{
              fontWeight: "bold",
              top: 170
       }
});

export default WelcomeScreen;