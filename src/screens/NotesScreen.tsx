import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/tokens';

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes & Locket</Text>
      <Text style={styles.body}>
        Shared notes, memories, and the photo locket will live here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.void,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  title: {
    color: colors.starlight,
    fontSize: 26,
    marginBottom: spacing.sm,
  },
  body: {
    color: colors.starlight,
    opacity: 0.75,
    lineHeight: 22,
  },
});
