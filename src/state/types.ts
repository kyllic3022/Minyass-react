export type Heartbeat = {
  id: string;
  direction: 'sent' | 'received';
  timestamp: number;
};

export type MoodEntry = {
  id: string;
  mood: string;
  note?: string;
  timestamp: number;
};

export type CheckInEntry = {
  id: string;
  triggers: string[];
  needs: string[];
  note?: string;
  timestamp: number;
};

export type MedicationDose = {
  label: 'AM' | 'PM';
  mg: number;
  time: string;
  lastAcknowledged?: number;
};

export type AppState = {
  heartbeats: Heartbeat[];
  mood?: MoodEntry;
  lastCheckIn?: CheckInEntry;
  sharedNote: string;
  meds: MedicationDose[];
};
