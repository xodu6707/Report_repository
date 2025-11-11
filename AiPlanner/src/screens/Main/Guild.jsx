import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { colors, radius, spacing } from '../../theme/colors';
import PrimaryButton from '../../components/PrimaryButton';

export default function Guild() {
  const [guildName, setGuildName] = useState('초보 학습 길드');
  const [weeklyGoal, setWeeklyGoal] = useState('총 100분 학습');
  const [posts, setPosts] = useState([
    { id: '1', text: '이번 주 목표 달성까지 40분 남았어요! 🔥' },
    { id: '2', text: '신규 퀘스트 추천: 영어 리스닝 15분' },
  ]);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={{ padding: spacing.xl, paddingBottom: spacing.xl * 2 }}
      ListHeaderComponent={
        <View>
          <Text style={styles.title}>길드</Text>
          <Text style={styles.meta}>같이 배우고 서로 응원해요</Text>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>내 길드</Text>
            <TextInput style={styles.input} value={guildName} onChangeText={setGuildName} />
            <Text style={styles.label}>주간 공동 목표</Text>
            <TextInput style={styles.input} value={weeklyGoal} onChangeText={setWeeklyGoal} />
            <View style={{ height: spacing.sm }} />
            <PrimaryButton label="길드 설정 저장" onPress={() => {}} />
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>피드</Text>
          </View>
        </View>
      }
      data={posts}
      keyExtractor={(p) => p.id}
      renderItem={({ item }) => (
        <View style={styles.post}>
          <Text style={styles.postText}>{item.text}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { fontSize: 22, fontWeight: '800', color: colors.text },
  meta: { color: colors.subtext, marginTop: 6, marginBottom: spacing.lg },
  sectionTitle: { fontWeight: '800', color: colors.text, marginBottom: spacing.sm },
  card: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.lg, marginBottom: spacing.lg },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md, marginBottom: spacing.md },
  label: { color: colors.subtext, marginBottom: 6 },
  post: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.lg },
  postText: { color: colors.text },
});
