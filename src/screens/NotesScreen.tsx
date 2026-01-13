import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Panel from '../components/Panel';
import { useStore } from '../state/store';
import { colors, spacing } from '../theme/tokens';

export default function NotesScreen() {
  const { state, dispatch } = useStore();
  const [draft, setDraft] = useState(state.sharedNote);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes & Locket</Text>
      <Text style={styles.body}>Shared notes, memories, and the photo locket live here.</Text>

      <Panel title="Shared Note">
        <TextInput
          style={styles.input}
          placeholder="Write something gentle..."
          placeholderTextColor="rgba(232, 230, 240, 0.4)"
          multiline
          value={draft}
          onChangeText={setDraft}
        />
        <Pressable
          style={styles.saveButton}
          onPress={() => dispatch({ type: 'updateNote', payload: draft })}
        >
          <Text style={styles.saveText}>Save</Text>
        </Pressable>
      </Panel>

      <Panel title="Photo Locket">
        <Text style={styles.bodyMuted}>Upload and rotate photos here (coming next).</Text>
        <View style={styles.locketPlaceholder}>
          <Text style={styles.bodyMuted}>Locket preview</Text>
        </View>
      </Panel>
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
    lineHeight: 22,
    marginBottom: spacing.md,
  },
  input: {
    minHeight: 120,
    color: colors.starlight,
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 240, 0.16)',
    borderRadius: 12,
    padding: spacing.sm,
    marginBottom: spacing.sm,
  },
  saveButton: {
    backgroundColor: colors.starBlue,
    paddingVertical: spacing.xs,
    borderRadius: 999,
    alignItems: 'center',
  },
  saveText: {
    color: colors.starlight,
    fontWeight: '600',
  },
  locketPlaceholder: {
    marginTop: spacing.sm,
    height: 160,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(232, 230, 240, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyMuted: {
    color: colors.starlight,
    opacity: 0.65,
  },
});
