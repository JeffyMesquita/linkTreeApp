import React from 'react';
import AppLoading from 'expo-app-loading';
import { Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import {
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_300Light,
  useFonts,
} from '@expo-google-fonts/roboto';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './src/context/Auth';

import Routes from './src/routes';

const queryClient = new QueryClient

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
    Roboto_300Light,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
