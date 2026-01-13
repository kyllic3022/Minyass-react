import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from './types';

const STORAGE_KEY = 'minyass.state.v1';

export async function loadState(): Promise<AppState | null> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }
  return JSON.parse(raw) as AppState;
}

export async function saveState(state: AppState): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
