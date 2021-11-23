import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/core";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
} from "react-native";

export default function SignUpScreen({ setToken }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView>
      <View>
        <View style={styles.logo}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/logo.png")}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.input}
            placeholder="email"
          />

          <TextInput
            onChangeText={(text) => {
              setUserName(text);
            }}
            style={styles.input}
            placeholder="userName"
          />

          <TextInput
            onChangeText={(text) => {
              setDescription(text);
            }}
            style={styles.multilineInput}
            multiline={true}
            numberOfLines={5}
            placeholder="Describe yourself in a few words..."
          />

          <TextInput
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />

          <TextInput
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
            style={styles.input}
            placeholder="confirm password"
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.buttonValidationSignUp}
            onPress={async () => {
              try {
                if (password === confirmPassword) {
                  const response = await axios.post(
                    "https://express-airbnb-api.herokuapp.com/user/sign_up",
                    {
                      email: email,
                      username: userName,
                      password: password,
                      description: description,
                    }
                  );

                  console.log("success");
                  setToken(response.data.token);
                } else {
                  alert("mot de passe et/ou mail incorrect");
                }
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            <Text>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text style={styles.createAccount}>
              Already have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
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
