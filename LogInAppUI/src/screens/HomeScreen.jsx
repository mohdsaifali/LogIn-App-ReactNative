import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation()
  const handleLogin = () => {
    navigation.navigate('Login')
  }
  const handleSignup = () => {
    navigation.navigate('Signup')
  }

  return (
    <View style={Styles.container}>
      <Image source={require("../assets/logo.png")} style={Styles.logo} />
      <Image
        source={require("../assets/banner.png")}
        style={Styles.BannerImage}
      />
      <Text style={Styles.heading}>Lorem ipsum dolor.</Text>
      <Text style={Styles.subheading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>
      <View style={Styles.buttonContainer}>
        <TouchableOpacity style = {[Styles.LoginBtn,{backgroundColor:"#45484A",}]} onPress={handleLogin}>
          <Text style= {Styles.loginBtnText}  >Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {Styles.LoginBtn} onPress={handleSignup} >
          <Text style= {Styles.sigupBtnText} >Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logo: {
    height: 50,
    width: 160,
    alignSelf: "center",
    marginBottom: 30,
    resizeMode: "contain",
    marginVertical: 60,
  },
  BannerImage: {
    height: 250,
    width: 400,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 30,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 10,
    shadowColor: "#000",
  },
  subheading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden",
    paddingVertical: 10,
    marginTop: 10,
    fontWeight: "300",
  },
  buttonContainer: {
    flexDirection: "row",
    marginLeft:17,
    marginTop: 30,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 100,
    width: "90%",
    height:60,
  },
  LoginBtn:{
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    borderRadius: 98,
  },
  loginBtnText:{
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  sigupBtnText:{
    fontWeight: "bold",
    fontSize: 18,
  }
});
