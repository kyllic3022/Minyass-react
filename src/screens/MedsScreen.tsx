import React, { useMemo } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Panel from '../components/Panel';
import { useStore } from '../state/store';
import { MedicationDose } from '../state/types';
import { colors, spacing } from '../theme/tokens';

function DoseCard({
  dose,
  onUpdate,
  onAcknowledge,
}: {
  dose: MedicationDose;
  onUpdate: (next: MedicationDose) => void;
  onAcknowledge: () => void;
}) {
  return (
    <Panel title={`${dose.label} Dose`}>
      <View style={styles.row}>
        <View style={styles.field}>
          <Text style={styles.label}>Time</Text>
          <TextInput
            style={styles.input}
            value={dose.time}
            onChangeText={time => onUpdate({ ...dose, time })}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>mg</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={dose.mg.toString()}
            onChangeText={mg => onUpdate({ ...dose, mg: Number(mg || 0) })}
          />
        </View>
      </View>
      <Pressable style={styles.ackButton} onPress={onAcknowledge}>
        <Text style={styles.ackText}>Mark as taken</Text>
      </Pressable>
      <Text style={styles.bodyMuted}>
        {dose.lastAcknowledged
          ? `Last taken: ${new Date(dose.lastAcknowledged).toLocaleTimeString()}`
          : 'Not acknowledged yet.'}
      </Text>
    </Panel>
  );
}

export default function MedsScreen() {
  const { state, dispatch } = useStore();

  const doses = useMemo(() => state.meds, [state.meds]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medication</Text>
      <Text style={styles.body}>Track AM/PM doses and acknowledgments.</Text>

      {doses.map(dose => (
        <DoseCard
          key={dose.label}
          dose={dose}
          onUpdate={next => dispatch({ type: 'updateDose', payload: next })}
          onAcknowledge={() => dispatch({ type: 'ackDose', payload: { label: dose.label } })}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  field: {
    flex: 1,
  },
  label: {
    color: colors.starlight,
    opacity: 0.65,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 240, 0.16)',
    borderRadius: 10,
    padding: spacing.xs,
    color: colors.starlight,
  },
  ackButton: {
    backgroundColor: colors.bordo,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  ackText: {
    color: colors.starlight,
    fontWeight: '600',
  },
  bodyMuted: {
    color: colors.starlight,
    opacity: 0.65,
  },
});
