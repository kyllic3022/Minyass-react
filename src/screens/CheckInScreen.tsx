import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Panel from '../components/Panel';
import SelectChip from '../components/SelectChip';
import { needOptions, triggerOptions } from '../data/checkinOptions';
import { useStore } from '../state/store';
import { colors, spacing } from '../theme/tokens';

export default function CheckInScreen() {
  const { state, dispatch } = useStore();
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const toggle = (value: string, list: string[], setList: (next: string[]) => void) => {
    setList(list.includes(value) ? list.filter(item => item !== value) : [...list, value]);
  };

  const canSubmit = selectedTriggers.length > 0 || selectedNeeds.length > 0 || note.trim().length > 0;

  const lastCheckIn = useMemo(() => state.lastCheckIn, [state.lastCheckIn]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Check-in</Text>
      <Text style={styles.body}>Log triggers, needs, and a gentle note for your partner.</Text>

      <Panel title="Triggers">
        <View style={styles.chipWrap}>
          {triggerOptions.map(option => (
            <SelectChip
              key={option}
              label={option}
              selected={selectedTriggers.includes(option)}
              onPress={() => toggle(option, selectedTriggers, setSelectedTriggers)}
            />
          ))}
        </View>
      </Panel>

      <Panel title="What I Need">
        <View style={styles.chipWrap}>
          {needOptions.map(option => (
            <SelectChip
              key={option}
              label={option}
              selected={selectedNeeds.includes(option)}
              onPress={() => toggle(option, selectedNeeds, setSelectedNeeds)}
            />
          ))}
        </View>
      </Panel>

      <Panel title="Note">
        <TextInput
          style={styles.input}
          placeholder="Add a gentle note..."
          placeholderTextColor="rgba(232, 230, 240, 0.4)"
          value={note}
          onChangeText={setNote}
          multiline
        />
      </Panel>

      <Pressable
        style={[styles.submitButton, !canSubmit && styles.submitDisabled]}
        disabled={!canSubmit}
        onPress={() => {
          dispatch({ type: 'submitCheckIn', payload: { triggers: selectedTriggers, needs: selectedNeeds, note: note.trim() } });
          setSelectedTriggers([]);
          setSelectedNeeds([]);
          setNote('');
        }}
      >
        <Text style={styles.submitText}>Share Check-in</Text>
      </Pressable>

      <Panel title="Last Shared">
        {lastCheckIn ? (
          <>
            <Text style={styles.bodyMuted}>Triggers: {lastCheckIn.triggers.join(', ') || 'None'}</Text>
            <Text style={styles.bodyMuted}>Needs: {lastCheckIn.needs.join(', ') || 'None'}</Text>
            <Text style={styles.bodyMuted}>Note: {lastCheckIn.note || 'No note'}</Text>
          </>
        ) : (
          <Text style={styles.bodyMuted}>No check-ins yet.</Text>
        )}
      </Panel>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.void,
    padding: spacing.lg,
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
    marginBottom: spacing.md,
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    minHeight: 80,
    color: colors.starlight,
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 240, 0.16)',
    borderRadius: 12,
    padding: spacing.sm,
  },
  submitButton: {
    backgroundColor: colors.bordo,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: 999,
    marginBottom: spacing.lg,
  },
  submitDisabled: {
    opacity: 0.4,
  },
  submitText: {
    color: colors.starlight,
    fontWeight: '600',
  },
  bodyMuted: {
    color: colors.starlight,
    opacity: 0.65,
    marginBottom: spacing.xs,
  },
});
