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
