// import React, { useEffect, useState } from 'react'

// import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

// export default function Fares({navigation , route}) {
//     // console.log(route)
// const {pickup, destination}  = route.params;

// // console.log('pickup', pickup)
// // console.log('destination', destination)


// const fares={
//   bike: 50,
//   rickshaw: 80,
// }

// const calculateFare = (vehicle) =>{
//   const {latitude: pickupLat, longitude: pickupLong } = pickup.geocodes.main
//   const {latitude: destinationLat, longitude: destinationLong } = destination.geocodes.main

//   const distance = calcCrow(pickupLat, pickupLong, destinationLat, destinationLong)

//   const fare =fares[vehicle] * distance;
//   console.log(distance)
//   alert('Rs. ' + fare.toFixed(2))
// }


// //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
// function calcCrow(lat1, lon1, lat2, lon2) 
// {
//   var R = 6371; // km
//   var dLat = toRad(lat2-lat1);
//   var dLon = toRad(lon2-lon1);
//   var lat1 = toRad(lat1);
//   var lat2 = toRad(lat2);

//   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//   var d = R * c;
//   return d;
// }

// // Converts numeric degrees to radians
// function toRad(Value) 
// {
//     return Value * Math.PI / 180;
// }

//   return (
//     <View>
//         <Text>Your Pickup Location is: {pickup.name} {pickup.location.address}</Text>
//         <Text>Your Destination is: {destination.name} {destination.location.address}</Text>
//         <Text>Select Fare</Text>


// <View>
//   <Button onPress={() => calculateFare('bike')} title={`Bike | ${fares.bike} Rs. / Km`}/>
//   <Button onPress={() => calculateFare('rickshaw')} title={`Rickshaw | ${fares.rickshaw} Rs. / Km`}/>
// </View>

//     </View>
//   )
// }
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text,Image, View, TouchableOpacity, Animated } from 'react-native';

export default function Fares({ navigation, route }) {
  const { pickup, destination } = route.params;

  const fares = {
    bike: 50,
    rickshaw: 80,
  };

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animation
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const calculateFare = (vehicle) => {
    const { latitude: pickupLat, longitude: pickupLong } = pickup.geocodes.main;
    const { latitude: destinationLat, longitude: destinationLong } = destination.geocodes.main;

    const distance = calcCrow(pickupLat, pickupLong, destinationLat, destinationLong);

    const fare = fares[vehicle] * distance;
    alert('Rs. ' + fare.toFixed(2));
  };

  const calcCrow = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const lat1Rad = toRad(lat1);
    const lat2Rad = toRad(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1Rad) * Math.cos(lat2Rad);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  };

  const toRad = (Value) => {
    return Value * Math.PI / 180;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}><View><Text style={styles.pickup}>Your Pickup Location</Text></View>{pickup.name} {pickup.location.address}</Text>
      <Text style={styles.text}><View><Text style={styles.destination}>Your Destination</Text></View> {destination.name} {destination.location.address}</Text>
      <Text style={styles.heading}>Select Vehicle</Text>

      <View style={styles.buttonContainer}>
      <Image source={require('../assets/bikegif.gif')} style={styles.image} />
        <TouchableOpacity onPress={() => calculateFare('bike')} style={styles.bikeButton}>
          <Animated.Text
            style={[styles.buttonText, {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                },
              ],
            }]}
          >
            Bike | {fares.bike} Rs. / Km
          </Animated.Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
      <Image source={require('../assets/rick.gif')} style={styles.image} />
        <TouchableOpacity onPress={() => calculateFare('rickshaw')} style={styles.rickshawButton}>
          <Animated.Text
            style={[styles.buttonText, {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                },
              ],
            }]}
          >
            Rickshaw | {fares.rickshaw} Rs. / Km
          </Animated.Text>
        </TouchableOpacity>
        
      </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  text: {
    
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor:"rgba(255, 215, 0, 0.2)",
  borderWidth:1,
  borderColor:'gold',
  borderRadius:8,
  width:'90%',
  padding:7,
  color: "gold",
  marginTop:5,
  
  marginLeft: 12,
  fontWeight: "bold",
  fontSize: 17,
  textShadowColor: 'rgba(255, 215, 0, 0.2)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10,
  },
  image:{
    width:250,
    height:150,
    marginBottom:5
  },
  // heading: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  //   textAlign: 'center',
  // },
  heading: {
    textDecorationLine:'underline',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    // Add animation and color properties
    color: 'gold',
    animationDuration: '2s', // Adjust animation duration as needed
    animationName: 'fadeIn', // Define the name of your animation
    animationIterationCount: '1', // Set the number of times the animation should occur
    animationFillMode: 'forwards', // Specify how the animation styles should be applied before and after it is executed
  },
   buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
    minWidth: 150,
  },
  bikeButton: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 10,
  },
  rickshawButton: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // New animations and styles
  goldBackground: {
    backgroundColor: 'gold',
    paddingHorizontal: 10, // Adjust padding as needed
    paddingVertical: 5, // Adjust padding as needed
    borderRadius: 5,
  },
  fadeInAnimation: {
    opacity: 0,
    animationDuration: '5s', // Adjust animation duration as needed
    animationName: 'fadeIn',
    animationIterationCount: '1',
    animationFillMode: 'forwards',
  },
  // Define the keyframes for fadeIn animation
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  pickup:{
fontSize:22,
paddingTop:5,

paddingLeft:70,
 color: 'gold',
fontWeight:'bold',
textDecorationLine:'underline',

  },
  destination:{
    fontSize:22,
paddingTop:5,
paddingLeft:85,
 color: 'gold',
fontWeight:'bold',
textDecorationLine:'underline',
  }
});