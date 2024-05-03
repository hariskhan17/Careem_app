import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet,Image } from "react-native";
import { SignUpPage } from "../Config/Firebase";

import LoginPage from "./Login";

function SignUp({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [country, setCountry] = useState("");
    const [isPress, setIsPress] = useState(false);

    async function RegisterPage() {
        if (!first.trim() || !last.trim() || !email.trim() || !password.trim() || !country.trim()) {
            alert("Please fill in all fields");
            return;
        }
        try {
            await SignUpPage({ email, password, first, last, country });
            setFirst("");
            setLast("");
            setCountry("");
            setEmail("");
            setPassword("");
            navigation.navigate("Login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
<View>
<Image source={require('../assets/register.gif')} style={styles.image} />
</View>


            <TextInput style={styles.input} placeholder="First Name" onChangeText={setFirst} value={first} />
            <TextInput style={styles.input} placeholder="Last Name" onChangeText={setLast} value={last} />
            <TextInput style={styles.input} placeholder="Country" onChangeText={setCountry} value={country} />
            <TextInput style={styles.input} placeholder="Enter email" onChangeText={setEmail} value={email} />
            <TextInput style={styles.input} placeholder="Enter password" onChangeText={setPassword} value={password} secureTextEntry={true} />

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>If you have an account, Login.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPressIn={() => setIsPress(true)} onPressOut={() => setIsPress(false)} onPress={RegisterPage}>
                <View style={[styles.button, isPress && styles.buttonPress]}>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'lightgoldenrodyellow',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
    link: {
        color: 'blue',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'gold',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    buttonPress: {
        backgroundColor: 'lightgoldenrodyellow',
    },
    image:{
        width:350,
        marginTop:-200,
        marginBottom:70
    }
});

export default SignUp;
