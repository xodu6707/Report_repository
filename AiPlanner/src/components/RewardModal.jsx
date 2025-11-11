import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../theme/colors';
import PrimaryButton from './PrimaryButton';

export default function RewardModal({ visible, xp, levelUp, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.title}>{levelUp ? '레벨 업! 🎉' : '퀘스트 완료!'}</Text>
          <Text style={styles.body}>{xp} XP를 획득했어요</Text>
          <PrimaryButton label="계속하기" onPress={onClose} style={{ marginTop: spacing.lg }} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center', padding: spacing.lg },
  modal: { backgroundColor: colors.card, width: '100%', borderRadius: radius.lg, padding: spacing.xl, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '800', color: colors.text },
  body: { marginTop: spacing.sm, color: colors.subtext, fontSize: 16 },
});
