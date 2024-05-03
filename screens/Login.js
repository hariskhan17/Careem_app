// import React, { useState } from "react";
// import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
// import { signIn } from "../Config/Firebase";

// function LoginPage({ navigation }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     async function login() {
//         try {
//             await signIn({email, password});
//             setEmail("");
//             setPassword("");
//             navigation.navigate("dashboard");
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <View>
//             <TextInput
//                 placeholder="Enter email"
//                 onChangeText={setEmail}
//                 value={email}
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//             />
//             <TextInput
//                 placeholder="Enter password"
//                 onChangeText={setPassword}
//                 secureTextEntry={true}
//                 value={password}
//             />

//             <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
//                 <Text>
//                     Don't have an account? Click here..
//                 </Text>
//             </TouchableOpacity>
//             <Button title="Login" onPress={login} />
//         </View>
//     );
// }

// export default LoginPage;
import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet,Image } from "react-native";
import { signIn } from "../Config/Firebase";

function LoginPage({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPress, setIsPress] = useState(false);

    async function login() {
        try {
            await signIn({email, password});
            setEmail("");
            setPassword("");
            navigation.navigate("dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>

<View>
<Image source={require('../assets/mainlogin.png')} style={styles.image} />
</View>

            <TextInput
                style={styles.input}
                placeholder="Enter email"
                onChangeText={setEmail}
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter password"
                onChangeText={setPassword}
                secureTextEntry={true}
                value={password}
            />

            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                <Text style={styles.link}>
                    Don't have an account? SignUp
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPressIn={() => setIsPress(true)} onPressOut={() => setIsPress(false)} onPress={login}>
                <View style={[styles.button, isPress && styles.buttonPress]}>
                    <Text style={styles.buttonText}>Login</Text>
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
    image:{
        width:350,
        height:100,
        marginTop:-250
    },
    buttonText : {
fontWeight:'bold',


    }
    
});

export default LoginPage;
