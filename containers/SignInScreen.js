import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function SignInScreen({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              setPassword(text);
            }}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.buttonValidation}
            onPress={async () => {
              try {
                const response = await axios.post(
                  "https://express-airbnb-api.herokuapp.com/user/log_in",
                  {
                    email: email,
                    password: password,
                  }
                );

                console.log("success");
                setToken(response.data.token);
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            <Text style={styles.buttonValidationText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.createAccount}>Create an account</Text>
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
    paddingHorizontal: 20,
  },

  input: {
    width: "100%",
    color: "gray",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    marginVertical: 20,
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

  buttonValidationText: {
    fontSize: 20,
    color: "gray",
  },

  createAccount: {
    marginTop: 20,
    color: "gray",
  },
});
