import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, Vibration, View } from 'react-native';
import Panel from '../components/Panel';
import { getNotificationStatus } from '../services/notifications';
import { useStore } from '../state/store';
import { colors, spacing } from '../theme/tokens';

export default function HomeScreen() {
  const { state, dispatch } = useStore();
  const [healthStatus, setHealthStatus] = useState<{ permissionGranted: boolean; token: string } | null>(null);
  const [healthLoading, setHealthLoading] = useState(false);

  const sendHeartbeat = () => {
    dispatch({ type: 'sendHeartbeat' });
    Vibration.vibrate(40);
  };

  const simulateReceive = () => {
    dispatch({ type: 'receiveHeartbeat' });
    Vibration.vibrate([0, 20, 60, 20]);
  };

  const heartbeats = state.heartbeats.slice(0, 5);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Heartbeat</Text>
      <Text style={styles.body}>Tap the heart-star to send a pulse.</Text>

      <Pressable style={styles.heartButton} onPress={sendHeartbeat}>
        <Text style={styles.heartText}>Send Pulse</Text>
      </Pressable>

      <View style={styles.row}>
        <Pressable style={styles.secondaryButton} onPress={simulateReceive}>
          <Text style={styles.secondaryText}>Simulate Receive</Text>
        </Pressable>
      </View>

      <Panel title="Recent Pulses">
        {heartbeats.length === 0 ? (
          <Text style={styles.bodyMuted}>No pulses yet.</Text>
        ) : (
          heartbeats.map(item => (
            <Text key={item.id} style={styles.bodyMuted}>
              {item.direction === 'sent' ? 'Sent' : 'Received'} •{' '}
              {new Date(item.timestamp).toLocaleTimeString()}
            </Text>
          ))
        )}
      </Panel>

      <Panel title="Mood Beacon">
        <Text style={styles.bodyMuted}>
          {state.mood ? `${state.mood.mood} • ${new Date(state.mood.timestamp).toLocaleDateString()}` : 'No mood set yet.'}
        </Text>
        <View style={styles.row}>
          {['Calm', 'Soft', 'Heavy', 'Bright'].map(label => (
            <Pressable
              key={label}
              style={styles.secondaryButton}
              onPress={() => dispatch({ type: 'setMood', payload: { mood: label } })}
            >
              <Text style={styles.secondaryText}>{label}</Text>
            </Pressable>
          ))}
        </View>
      </Panel>

      <Panel title="Notification Health">
        {healthStatus ? (
          <>
            <Text style={styles.bodyMuted}>
              Permission: {healthStatus.permissionGranted ? 'Granted' : 'Missing'}
            </Text>
            <Text style={styles.bodyMuted}>
              Token: {healthStatus.token ? `${healthStatus.token.slice(0, 16)}...` : 'Unavailable'}
            </Text>
          </>
        ) : (
          <Text style={styles.bodyMuted}>Run a health check to confirm notifications.</Text>
        )}
        <Pressable
          style={styles.secondaryButton}
          onPress={async () => {
            setHealthLoading(true);
            try {
              const status = await getNotificationStatus();
              setHealthStatus(status);
            } finally {
              setHealthLoading(false);
            }
          }}
        >
          <Text style={styles.secondaryText}>{healthLoading ? 'Checking...' : 'Run Health Check'}</Text>
        </Pressable>
      </Panel>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.void,
  },
  title: {
    color: colors.starlight,
    fontSize: 28,
    marginBottom: spacing.xs,
  },
  body: {
    color: colors.starlight,
    opacity: 0.75,
    marginBottom: spacing.md,
  },
  heartButton: {
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.bordo,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.ember,
    shadowOpacity: 0.6,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    marginBottom: spacing.lg,
  },
  heartText: {
    color: colors.starlight,
    fontSize: 20,
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  secondaryButton: {
    borderRadius: 999,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 240, 0.2)',
  },
  secondaryText: {
    color: colors.starlight,
    fontSize: 12,
  },
  bodyMuted: {
    color: colors.starlight,
    opacity: 0.65,
    marginBottom: spacing.xs,
  },
});
