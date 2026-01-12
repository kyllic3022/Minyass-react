import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/tokens';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heartbeat</Text>
      <Text style={styles.body}>
        Tap the heart-star to send a pulse.
      </Text>
      <View style={styles.heartPlaceholder}>
        <Text style={styles.heartText}>Pulse</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.void,
    padding: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.starlight,
    fontSize: 28,
    marginBottom: spacing.sm,
  },
  body: {
    color: colors.starlight,
    opacity: 0.75,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  heartPlaceholder: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.bordo,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.ember,
    shadowOpacity: 0.6,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
  },
  heartText: {
    color: colors.starlight,
    fontSize: 18,
    letterSpacing: 1,
  },
});
