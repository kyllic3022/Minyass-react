import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';

async function requestAndroidNotificationPermission() {
  if (Platform.OS !== 'android' || Platform.Version < 33) {
    return true;
  }

  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
  );

  return result === PermissionsAndroid.RESULTS.GRANTED;
}

export async function bootstrapNotifications() {
  await requestAndroidNotificationPermission();
  await messaging().registerDeviceForRemoteMessages();

  const token = await messaging().getToken();
  if (__DEV__) {
    console.log('FCM token:', token);
  }
}

export function subscribeToForegroundMessages(onReceive: (data?: Record<string, string>) => void) {
  return messaging().onMessage(async message => {
    onReceive(message.data);
  });
}

export async function getNotificationStatus() {
  const permissionGranted = await requestAndroidNotificationPermission();
  const token = await messaging().getToken();
  return { permissionGranted, token };
}
