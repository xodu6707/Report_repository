import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, spacing, radius } from '../../theme/colors';
import { useUser } from '../../store/UserContext';
import ProgressBar from '../../components/ProgressBar';
import QuestCard from '../../components/QuestCard';

export default function Home({ quests, onStartQuest }) {
  const { user } = useUser();
  const levelProgress = ((user?.xp ?? 0) % 1000) / 1000;
  const todayXP = 340;
  const dailyGoalXP = 500;
  const dailyProgress = (todayXP / dailyGoalXP) * 100;

  const todayQuests = quests.slice(0, 3);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header with purple background */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Good morning,</Text>
              <Text style={styles.userName}>{user?.name ?? 'Alex Johnson'}</Text>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <Text style={styles.bellIcon}>🔔</Text>
            </TouchableOpacity>
          </View>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <View style={styles.statIconRow}>
                <Text style={styles.levelIcon}>⚡</Text>
                <Text style={styles.statLabel}>Level</Text>
              </View>
              <Text style={styles.statValue}>{user?.level ?? 7}</Text>
            </View>
            <View style={styles.statCard}>
              <View style={styles.statIconRow}>
                <Text style={styles.streakIcon}>🔥</Text>
                <Text style={styles.statLabel}>Streak</Text>
              </View>
              <Text style={styles.statValue}>12 days</Text>
            </View>
            <View style={styles.statCard}>
              <View style={styles.statIconRow}>
                <Text style={styles.badgeIcon}>🏆</Text>
                <Text style={styles.statLabel}>Badges</Text>
              </View>
              <Text style={styles.statValue}>8</Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Today's Progress */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Today's Progress</Text>
              <Text style={styles.progressPercent}>{Math.round(dailyProgress)}%</Text>
            </View>
            <ProgressBar progress={dailyProgress / 100} height={12} />
            <View style={styles.progressFooter}>
              <Text style={styles.progressText}>{todayXP} / {dailyGoalXP} XP</Text>
              <Text style={styles.progressRemaining}>+{dailyGoalXP - todayXP} XP to next level</Text>
            </View>
          </View>

          {/* Today's Quests */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Today's Quests</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllLink}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.questsList}>
              {todayQuests.map((quest) => (
                <QuestCard
                  key={quest.id}
                  quest={quest}
                  onStart={() => onStartQuest(quest.id)}
                  compact
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  greeting: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bellIcon: {
    fontSize: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: spacing.md,
    borderRadius: radius.md,
  },
  statIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  levelIcon: {
    fontSize: 16,
  },
  streakIcon: {
    fontSize: 16,
  },
  badgeIcon: {
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: colors.subtext,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  content: {
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  progressPercent: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  progressFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  progressText: {
    fontSize: 14,
    color: colors.subtext,
  },
  progressRemaining: {
    fontSize: 14,
    color: colors.success,
  },
  viewAllLink: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  questsList: {
    gap: 12,
  },
});
