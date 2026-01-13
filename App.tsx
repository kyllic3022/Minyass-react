import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { bootstrapNotifications, subscribeToForegroundMessages } from './src/services/notifications';
import { StoreProvider, useStore } from './src/state/store';
import { colors } from './src/theme/tokens';

function AppShell() {
  const { dispatch } = useStore();

  useEffect(() => {
    bootstrapNotifications().catch(error => {
      if (__DEV__) {
        console.warn('Notification bootstrap failed', error);
      }
    });
    const unsubscribe = subscribeToForegroundMessages(() => {
      dispatch({ type: 'receiveHeartbeat' });
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <StoreProvider>
          <AppShell />
        </StoreProvider>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.void,
  },
});
