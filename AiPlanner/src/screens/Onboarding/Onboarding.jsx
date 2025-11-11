import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, spacing } from '../../theme/colors';
import PrimaryButton from '../../components/PrimaryButton';

export default function Onboarding({ onDone }) {
  const [page, setPage] = useState(0);
  const titles = ['AI 추천', '게이미피케이션', '커뮤니티'];
  const descs = [
    '개인화된 루틴 추천으로 시작을 쉽게.',
    'XP · 배지 · 레벨로 동기부여.',
    '길드와 함께 성장하는 학습.',
  ];
  const next = () => (page < 2 ? setPage(page + 1) : onDone());
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>게이미피케이션 학습 플래너</Text>
      <View style={{ height: spacing.lg }} />
      <Image source={require('../../assets/image.png')} style={styles.image} resizeMode="contain" />
      <View style={{ height: spacing.lg }} />
      <Text style={styles.title}>{titles[page]}</Text>
      <Text style={styles.desc}>{descs[page]}</Text>
      <View style={{ height: spacing.lg }} />
      <PrimaryButton label={page < 2 ? '다음' : '시작하기'} onPress={next} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  logo: { fontSize: 18, fontWeight: '800', color: colors.primary },
  image: { width: '100%', height: 220, borderRadius: 8 },
  title: { fontSize: 22, fontWeight: '800', color: colors.text },
  desc: { marginTop: 6, fontSize: 16, color: colors.subtext, textAlign: 'center' },
});
