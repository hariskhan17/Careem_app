import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'; // Import Animatable

export default function Dashboard({ navigation }) {
  const [isNavigating, setIsNavigating] = useState(false);

  const handlePress = () => {
    setIsNavigating(true);
    // Apply animation to the button before navigation
    ButtonRef.current?.swing(1000).then(() => {
      navigation.navigate('user-pickup');
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset the isNavigating state when the component receives focus
      setIsNavigating(false);
    });

    return unsubscribe;
  }, [navigation]);

  const ButtonRef = React.useRef(null);

  return (
    <View >
      <Animatable.View ref={ButtonRef} style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress} disabled={isNavigating}>
          <Text style={styles.buttonText}>{isNavigating ? 'Loading...' : "Let's Go!"}</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Image source={require('../assets/cargo.gif')} style={styles.image} />
      <Image source={require('../assets/pint.gif')} style={styles.image} />
      <Image source={require('../assets/human.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center', // Center the button
    marginTop: 20, // Add margin top for spacing
  },
  button: {
    backgroundColor: 'gold',
    width: 200,
    height: 50,
    fontWeight: 'bold',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Convert text to uppercase
    letterSpacing: 1, // Add letter spacing for better readability
  },
  image: {
    height: 200, // Set a fixed height for better consistency
    width: '100%',
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 15, // Add a border radius to the image
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
