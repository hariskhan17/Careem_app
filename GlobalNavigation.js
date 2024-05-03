import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from './screens/Dashboard';
import UserPickup from './screens/Pickup';
import UserDestination from './screens/Destination';
import Fares from './screens/Fares';
import SigUp from './screens/Register';
import LoginPage from './screens/Login';

const Stack = createNativeStackNavigator();

export default function GlobalNavigation() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
      <Stack.Screen name='sigup' component={SigUp}
          options={{
            headerTitle: 'Sign-Up',
          }}
        />
        <Stack.Screen name='Login' component={LoginPage}
          options={{
            headerTitle: 'LogIn',
          }}
        />
        <Stack.Screen name='dashboard' component={Dashboard}
          options={{
            headerTitle: 'Dashboard',
          }}
        />

        

        <Stack.Screen name='user-pickup' component={UserPickup}
          options={{
            headerTitle: 'User Pickup',
          }}
        />
        <Stack.Screen name='user-destination' component={UserDestination}
          options={{
            headerTitle: 'User Destination',
          }}
        />
        <Stack.Screen name='select-fare' component={Fares}
          options={{
            headerTitle: 'Select Fare',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignUp from './screens/SignUp';
// import Dashboard from './screens/Dashboard';
// import UserPickup from './screens/Pickup';
// import UserDestination from './screens/Destination';
// import Fares from './screens/Fares';
// import Login from './screens/Login';
// import { Provider } from 'react-redux';
// import { store } from './config/store';

// const Stack = createNativeStackNavigator();

// export default function GlobalNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name='Signup'
//           component={SignUp}
//           options={{
//             headerTitle: 'Signup',
//           }}
//         />
//         <Stack.Screen
//           name='Login'
//           component={Login}
//           options={{
//             headerTitle: 'Login',
//           }}
//         />
//         <Stack.Screen
//           name='dashboard'
//           component={Dashboard}
//           options={{
//             headerTitle: 'Dashboard',
//           }}
//         />
//         <Stack.Screen
//           name='user-pickup'
//           component={UserPickup}
//           options={{
//             headerTitle: 'User Pickup',
//           }}
//         />
//         <Stack.Screen
//           name='user-destination'
//           component={UserDestination}
//           options={{
//             headerTitle: 'User Destination',
//           }}
//         />
//         <Stack.Screen
//           name='select-fare'
//           component={Fares}
//           options={{
//             headerTitle: 'Select Fare',
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignUp from './screens/SignUp';
// import Dashboard from './screens/Dashboard';
// import UserPickup from './screens/Pickup';
// import UserDestination from './screens/Destination';
// import Fares from './screens/Fares';
// import Login from './screens/Login';
// import { Provider } from 'react-redux';
// import { store } from './config/store';

// const Stack = createNativeStackNavigator();

// export default function GlobalNavigation() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name='Signup'
//             component={SignUp}
//             options={{
//               headerTitle: 'Signup',
//             }}
//           />
//           <Stack.Screen
//             name='Login'
//             component={Login}
//             options={{
//               headerTitle: 'Login',
//             }}
//           />
//           <Stack.Screen
//             name='dashboard'
//             component={Dashboard}
//             options={{
//               headerTitle: 'Dashboard',
//             }}
//           />
//           <Stack.Screen
//             name='user-pickup'
//             component={UserPickup}
//             options={{
//               headerTitle: 'User Pickup',
//             }}
//           />
//           <Stack.Screen
//             name='user-destination'
//             component={UserDestination}
//             options={{
//               headerTitle: 'User Destination',
//             }}
//           />
//           <Stack.Screen
//             name='select-fare'
//             component={Fares}
//             options={{
//               headerTitle: 'Select Fare',
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }
