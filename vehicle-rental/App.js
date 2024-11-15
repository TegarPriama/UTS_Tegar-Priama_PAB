import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme } from 'native-base';


// Screen imports
import BerandaScreen from './src/screens/BerandaScreen';
import DetailScreen from './src/screens/DetailScreen';
import PemesananScreen from './src/screens/PemesananScreen';
import ReviewList from './src/screens/ReviewList';
import CustomerSupportChatScreen from './src/screens/CustomerSupportChatScreen';
import PromoDetailScreen from './src/screens/PromoDetailScreen';
const Stack = createNativeStackNavigator();

// Create theme config to disable SSRProvider
const theme = extendTheme({
  config: {
    // Disable SSR for React Native
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Beranda"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
          }}
        >
          <Stack.Screen 
            name="Beranda" 
            component={BerandaScreen}
            options={{ title: 'Vehicle Rental' }}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Pemesanan" component={PemesananScreen} />
          <Stack.Screen name="ReviewList" component={ReviewList} />
          <Stack.Screen name="CustomerSupportChatScreen" component={CustomerSupportChatScreen} />
          <Stack.Screen name="PromoDetailScreen" component={PromoDetailScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}