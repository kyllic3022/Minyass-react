import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, radius, spacing } from '../theme/tokens';

type SelectChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function SelectChip({ label, selected, onPress }: SelectChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        selected && styles.selected,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 240, 0.14)',
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  selected: {
    backgroundColor: colors.bordo,
    borderColor: colors.ember,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: colors.starlight,
    fontSize: 12,
  },
  textSelected: {
    color: colors.starlight,
    fontWeight: '600',
  },
});
