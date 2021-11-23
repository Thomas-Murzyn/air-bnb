import React from "react";
import { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
} from "react-native";

export default function SignUpScreen({ setToken }) {
  return (
    <View>
      <View>
        <View style={styles.logo}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/logo.png")}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="email" />

          <TextInput style={styles.input} placeholder="userName" />

          <TextInput
            style={styles.multilineInput}
            multiline={true}
            numberOfLines={5}
            placeholder="Describe yourself in a few words..."
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="confirm password"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.buttonValidationSignUp}
            onPress={async () => {
              const userToken = "secret-token";
              setToken(userToken);
            }}
          >
            <Text>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.createAccount}>
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  inputContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  input: {
    width: "100%",
    color: "gray",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    marginVertical: 25,
  },

  multilineInput: {
    borderWidth: 1,
    borderColor: "gray",
    height: 100,
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },

  buttonValidation: {
    color: "gray",
    marginTop: 150,
    width: "50%",
    height: 50,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonValidationSignUp: {
    color: "gray",
    marginTop: 20,
    width: "50%",
    height: 50,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonValidationText: {
    fontSize: 20,
    color: "gray",
  },

  createAccount: {
    marginTop: 20,
    color: "gray",
  },
});
