import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, radius, spacing } from '../theme/colors';
import ProgressBar from './ProgressBar';

export default function QuestCard({ quest, onStart, onPress, compact }) {
  const difficultyColors = {
    Easy: { bg: 'rgba(16, 185, 129, 0.1)', text: colors.success },
    Medium: { bg: 'rgba(245, 158, 11, 0.1)', text: colors.warning },
    Hard: { bg: 'rgba(239, 68, 68, 0.1)', text: colors.danger },
  };

  const difficultyStyle = difficultyColors[quest.difficulty] || difficultyColors.Medium;
  const progressPercent = Math.round((quest.progress || 0) * 100);
  const isCompleted = progressPercent >= 100;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        isCompleted && styles.cardCompleted
      ]}
      activeOpacity={0.8}
      onPress={onPress || (() => onStart())}
    >
      <View style={styles.cardHeader}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, isCompleted && styles.titleCompleted]} numberOfLines={2}>
            {quest.title}
          </Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </View>

      <View style={styles.badges}>
        <View style={[styles.badge, { backgroundColor: difficultyStyle.bg }]}>
          <Text style={[styles.badgeText, { color: difficultyStyle.text }]}>
            {quest.difficulty}
          </Text>
        </View>
        <Text style={styles.xpText}>+{quest.xp} XP</Text>
        {!compact && quest.minutes && (
          <>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.timeText}>{quest.minutes}분</Text>
          </>
        )}
      </View>

      {!isCompleted && (
        <>
          <View style={styles.progressSection}>
            <ProgressBar progress={quest.progress || 0} height={8} />
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  cardCompleted: {
    borderColor: 'rgba(16, 185, 129, 0.3)',
    backgroundColor: 'rgba(16, 185, 129, 0.05)',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  titleContainer: {
    flex: 1,
    marginRight: spacing.sm,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 22,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: colors.subtext,
  },
  chevron: {
    fontSize: 24,
    color: colors.textMuted,
    fontWeight: '300',
  },
  badges: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: spacing.md,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.sm,
    marginRight: spacing.sm,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  xpText: {
    fontSize: 14,
    color: colors.subtext,
    marginRight: spacing.sm,
  },
  dot: {
    fontSize: 14,
    color: colors.textMuted,
    marginRight: spacing.sm,
  },
  timeText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  progressSection: {
    marginTop: spacing.sm,
  },
});
