import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { loadState, saveState } from './storage';
import { AppState, CheckInEntry, Heartbeat, MedicationDose, MoodEntry } from './types';

type Action =
  | { type: 'hydrate'; payload: AppState }
  | { type: 'sendHeartbeat' }
  | { type: 'receiveHeartbeat' }
  | { type: 'setMood'; payload: { mood: string; note?: string } }
  | { type: 'submitCheckIn'; payload: { triggers: string[]; needs: string[]; note?: string } }
  | { type: 'updateNote'; payload: string }
  | { type: 'updateDose'; payload: MedicationDose }
  | { type: 'ackDose'; payload: { label: 'AM' | 'PM' } };

const initialState: AppState = {
  heartbeats: [],
  mood: undefined,
  lastCheckIn: undefined,
  sharedNote: '',
  meds: [
    { label: 'AM', mg: 0, time: '08:00' },
    { label: 'PM', mg: 0, time: '20:00' },
  ],
};

function nowId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'hydrate':
      return { ...state, ...action.payload };
    case 'sendHeartbeat': {
      const heartbeat: Heartbeat = { id: nowId(), direction: 'sent', timestamp: Date.now() };
      return { ...state, heartbeats: [heartbeat, ...state.heartbeats].slice(0, 20) };
    }
    case 'receiveHeartbeat': {
      const heartbeat: Heartbeat = { id: nowId(), direction: 'received', timestamp: Date.now() };
      return { ...state, heartbeats: [heartbeat, ...state.heartbeats].slice(0, 20) };
    }
    case 'setMood': {
      const mood: MoodEntry = { id: nowId(), mood: action.payload.mood, note: action.payload.note, timestamp: Date.now() };
      return { ...state, mood };
    }
    case 'submitCheckIn': {
      const lastCheckIn: CheckInEntry = {
        id: nowId(),
        triggers: action.payload.triggers,
        needs: action.payload.needs,
        note: action.payload.note,
        timestamp: Date.now(),
      };
      return { ...state, lastCheckIn };
    }
    case 'updateNote':
      return { ...state, sharedNote: action.payload };
    case 'updateDose': {
      const meds = state.meds.map(dose => (dose.label === action.payload.label ? action.payload : dose));
      return { ...state, meds };
    }
    case 'ackDose': {
      const meds = state.meds.map(dose =>
        dose.label === action.payload.label ? { ...dose, lastAcknowledged: Date.now() } : dose
      );
      return { ...state, meds };
    }
    default:
      return state;
  }
}

type StoreContextValue = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  hydrated: boolean;
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    loadState()
      .then(stored => {
        if (stored) {
          dispatch({ type: 'hydrate', payload: stored });
        }
      })
      .finally(() => setHydrated(true));
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    const handle = setTimeout(() => {
      saveState(state).catch(() => {});
    }, 300);
    return () => clearTimeout(handle);
  }, [state, hydrated]);

  const value = useMemo(() => ({ state, dispatch, hydrated }), [state, hydrated]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const value = useContext(StoreContext);
  if (!value) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return value;
}
