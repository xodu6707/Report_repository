import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../theme/colors';
import PrimaryButton from '../../components/PrimaryButton';
import { useUser } from '../../store/UserContext';

export default function GoalSetting({ onDone }) {
  const { user, setDailyGoal } = useUser();
  const [minutes, setMinutes] = useState(String((user && user.dailyGoalMinutes) ?? 30));
  const [category, setCategory] = useState('일반');
  const [difficulty, setDifficulty] = useState('Easy');

  const handleCreate = () => {
    const n = Math.max(5, Math.min(300, parseInt(minutes || '30', 10)));
    setDailyGoal(n);
    onDone();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>목표 설정</Text>
      <Text style={styles.desc}>하루 목표와 관심사를 정해요</Text>
      <View style={{ height: spacing.lg }} />
      <Text style={styles.label}>하루 학습 시간(분)</Text>
      <TextInput keyboardType="numeric" style={styles.input} value={minutes} onChangeText={setMinutes} />
      <Text style={styles.label}>카테고리</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} />
      <Text style={styles.label}>난이도</Text>
      <View style={{ flexDirection: 'row' }}>
        {['Easy', 'Medium', 'Hard'].map((d) => (
          <Text key={d} onPress={() => setDifficulty(d)} style={[styles.chip, difficulty === d && styles.chipActive]}>
            {d}
          </Text>
        ))}
      </View>
      <View style={{ height: spacing.lg }} />
      <PrimaryButton label="루틴 생성" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.xl, paddingTop: spacing.xl * 1.2 },
  title: { fontSize: 22, fontWeight: '800', color: colors.text },
  desc: { color: colors.subtext, marginTop: 6, marginBottom: spacing.lg },
  label: { fontWeight: '700', marginBottom: 6, marginTop: spacing.md, color: colors.text },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md },
  chip: { borderWidth: 1, borderColor: colors.border, color: colors.subtext, paddingHorizontal: spacing.md, paddingVertical: 8, borderRadius: radius.pill, marginRight: spacing.sm },
  chipActive: { backgroundColor: colors.primaryLight, color: colors.primary, borderColor: colors.primary },
});
