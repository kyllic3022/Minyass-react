import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme/tokens';

type PanelProps = {
  title: string;
  children: React.ReactNode;
};

export default function Panel({ title, children }: PanelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.deepNight,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 240, 0.08)',
  },
  title: {
    color: colors.starlight,
    fontSize: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
    opacity: 0.7,
  },
});
