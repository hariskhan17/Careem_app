import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import * as Animatable from 'react-native-animatable'; // Import Animatable

export default function Destination({ navigation, route }) {
  const { pickup } = route.params;

  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [destination, setDestination] = useState(null);
  const uri = "https://nextcarrental.com/smsite/npauto_8/media/imgs/21948_loader.gif";

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        distanceInterval: 1,
        timeInterval: 1000
      }, (location) => {
        setLocation(location);
      });
    })();
  }, []);

  if (!location) {
    return (
      <View>
        <Image style={{ width: 200, height: 200, marginTop: 250, marginLeft: 100 }} source={{ uri: uri }} />
      </View>
    );
  }

  const searchPlaces = (text) => {
    setDestination(null);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'fsq3nFAD3ZQc0IAfM3nR6T9kV7D1tQ8dM/53YA3/8gH5dKY='
      }
    };

    const { latitude, longitude } = location.coords;

    fetch(`https://api.foursquare.com/v3/places/search?query=${text}&ll=${latitude},${longitude}&radius=3000`, options)
      .then(response => response.json())
      .then(response => {
        setPlaces(response.results);
      })
      .catch(err => console.error(err));
  };

  const getDestinationLocation = (item) => {
    setDestination(item);
  };

  return (
    <View>
      <View>
        <TextInput style={styles.input} placeholder='Search Destination Location' onChangeText={searchPlaces} />
        {!destination &&
          <View>
            {places.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => getDestinationLocation(item)}>
                <Text style={{backgroundColor:'rgba(255, 215, 0, 0.2)' ,borderColor:'gold',borderWidth:1,padding:5,marginLeft:16,width:380,fontWeight:'bold'}}>{item.name} {item.location.address}</Text>
              </TouchableOpacity>
            ))}
          </View>
        }
        <Text style={styles.setPlaces}>Your Pickup Location is {pickup.name} {pickup.location.address}</Text>
        {destination &&
          <View>
            <Text style={styles.pickupLocation}>Your Destination Location Is {destination.name} {destination.location.address}</Text>
          </View>
        }
      </View>
      <View>
        <MapView style={styles.map} initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.0001,
        }}>
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Your Location"}
            description={"My Home"}
          />
        </MapView>
        <Animatable.View animation="bounce" style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            disabled={!pickup || !destination}
            onPress={() => navigation.navigate('select-fare', { pickup, destination })}
          >
            <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Select Vehicle🚘</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pickupLocation: {
  backgroundColor:"rgba(255, 215, 0, 0.2)",
  borderWidth:1,
  borderColor:'gold',
  borderRadius:8,
  width:'90%',
  padding:7,
  color: "gold",
  marginTop:5,
  marginBottom:5,
  marginLeft: 20,
  fontWeight: "bold",
  fontSize: 15,
  textShadowColor: 'rgba(255, 215, 0, 0.2)',
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10,

  },
  input: {
    borderColor: 'gold',
    borderWidth: 1,
    borderStyle: 'solid',
    width: "90%",
    borderRadius: 10,

    height: 40,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: 'rgba(255, 215, 0, 0.2)', // Light gold background
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  setPlaces: {
    backgroundColor:"rgba(255, 215, 0, 0.2)",
    borderWidth:1,
    borderColor:'gold',
    borderRadius:8,
    width:'90%',
    padding:7,
    color: "gold",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 15,
    textShadowColor: 'rgba(255, 215, 0, 0.2)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    alignItems: 'center', // Center the button
    marginTop: 10, // Add margin top for spacing
  },
  button: {
    backgroundColor: 'gold',
    width: 230,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
