import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    View,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import Entypo from "@expo/vector-icons/Entypo";
  import AntDesign from "@expo/vector-icons/AntDesign";
  import Fontisto from "@expo/vector-icons/Fontisto";
  
  const SignupScreen = () => {
    const [secureEntry, setSecureEntry] = useState(true);
    const navigation = useNavigation();
  
    const HandleBackIcon = () => {
      navigation.navigate("Home");
    };
  
    const handleSignup = () => {
      navigation.navigate("Login"); // Ensure "Signup" is part of your navigation routes
    };
  
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={HandleBackIcon} style={Styles.arrowIcon}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={Styles.textContainer}>
          <Text style={Styles.headingText}>Let's get</Text>
          <Text style={Styles.headingText}>started</Text>
          {/* <Text style={Styles.headingText}>Back</Text> */}
        </View>
        {/* Form */}
        <View style={Styles.formContainer}>
          <View style={Styles.inputContainer}>
            <AntDesign name="mail" size={24} color="black" />
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor={"#AEB5BB"}
              keyboardType="email-address"
              style={Styles.textInput}
            />
          </View>
          <View style={Styles.inputContainer}>
          <AntDesign name="mobile1" size={24} color="black" />
            <TextInput
              placeholder="Enter Your Mobile Number"
              placeholderTextColor={"#AEB5BB"}
              keyboardType="mobile"
              style={Styles.textInput}
            />
          </View>
          <View style={Styles.inputContainer}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              placeholder="Enter Your Password"
              placeholderTextColor={"#AEB5BB"}
              secureTextEntry={secureEntry}
              style={Styles.textInput}
            />
            <Pressable
              style={Styles.passwordIcon}
              onPress={() => setSecureEntry((prev) => !prev)}
            >
              <Entypo
                name={secureEntry ? "eye" : "eye-with-line"}
                size={24}
                color="black"
              />
            </Pressable>
          </View>
          <TouchableOpacity style={Styles.loginBtn} onPress={handleSignup}>
            <Text style={Styles.loginText}>Signup</Text>
          </TouchableOpacity>
          <Text style={Styles.inputWrapper}>Or Continue With</Text>
          <View style={Styles.googleBtnWrapper}>
            <TouchableOpacity style={Styles.googleBtn}>
              <Fontisto name="google" size={24} color="black" />
              <Text style={Styles.googleText}>Google</Text>
            </TouchableOpacity>
            <View style={Styles.footerText}>
          <Text style={Styles.inputWrapper}>Don’t have an account?</Text>
          <TouchableOpacity style={Styles.signupBtn} onPress={handleSignup} >
            <Text style={Styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
          </View>
          
        </View>
      </View>
    );
  };
  
  export default SignupScreen;
  
  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      padding: 10,
    
    },
    arrowIcon: {
      marginTop: 50,
      marginLeft: 20,
    },
    textContainer: {
      marginVertical: 20,
    },
    headingText: {
      lineHeight: 30,
      fontSize: 32,
      fontWeight: "bold",
      marginTop: 20,
    },
    formContainer: {
      marginTop: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: "#AEB5BB",
      borderRadius: 100,
      paddingHorizontal: 15,
      paddingVertical: 15,
      marginBottom: 10,
      backgroundColor: "#F8F9FA",
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    textInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
    },
    passwordIcon: {
      position: "absolute",
      right: 20,
      justifyContent: "center",
    },
    forgetPassword: {
      textAlign: "right",
      marginTop: 10,
      marginRight: 10,
      color: "#000",
      textDecorationLine: "underline",
      fontSize: 16,
      fontWeight: "bold",
    },
    loginBtn: {
      backgroundColor: "#45484A",
      padding: 15,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
    },
    loginText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 18,
    },
    inputWrapper: {
      marginTop: 30,
      fontSize: 16,
      fontWeight: "bold",
      color: "#45484A",
      textAlign: "center",
    },
    googleBtnWrapper: {
      alignItems: "center",
      marginVertical: 30,
    },
    googleBtn: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 2,
      paddingVertical: 12,
      paddingHorizontal: 100,
      borderRadius: 100,
    },
    googleText: {
      marginLeft: 10,
      fontSize: 16,
      fontWeight: "bold",
    },
    footerText: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      
    },
    signupBtn: {
      marginLeft: 5,
      paddingTop:30,
    },
    signupText: {
      color: "#45484A",
      textDecorationLine: "underline",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  