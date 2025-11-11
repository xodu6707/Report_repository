import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, spacing, radius } from '../../theme/colors';
import { useUser } from '../../store/UserContext';
import ProgressBar from '../../components/ProgressBar';
import PrimaryButton from '../../components/PrimaryButton';

export default function Profile() {
  const { user, logout } = useUser();
  const levelProgress = ((user?.xp ?? 0) % 1000) / 1000;

  const badges = [
    { icon: '⭐', name: 'First Steps', earned: true },
    { icon: '🔥', name: '7 Day Streak', earned: true },
    { icon: '🛡️', name: 'Quest Master', earned: true },
    { icon: '🏆', name: 'Level 5', earned: true },
    { icon: '🎖️', name: 'Perfectionist', earned: true },
    { icon: '⚡', name: 'Speed Learner', earned: false },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header with purple background */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {(user?.name || 'AJ').substring(0, 2).toUpperCase()}
            </Text>
          </View>
          <Text style={styles.userName}>{user?.name ?? 'Alex Johnson'}</Text>
          <Text style={styles.userEmail}>{user?.email ?? 'alex@email.com'}</Text>

          {/* Level Card */}
          <View style={styles.levelCard}>
            <View style={styles.levelInfo}>
              <Text style={styles.levelLabel}>Current Level</Text>
              <Text style={styles.levelValue}>Level {user?.level ?? 7}</Text>
            </View>
            <View style={styles.levelCircle}>
              <Text style={styles.levelCircleText}>{user?.level ?? 7}</Text>
            </View>
          </View>

          {/* Progress */}
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressText}>{user?.xp ?? 1240} / 1000 XP</Text>
              <Text style={styles.progressPercent}>{Math.round(levelProgress * 100)}%</Text>
            </View>
            <ProgressBar progress={levelProgress} height={12} />
          </View>
        </View>
      </View>

      {/* Badges */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Achievements</Text>
        <View style={styles.badgesGrid}>
          {badges.map((badge, index) => (
            <View key={index} style={[styles.badgeItem, !badge.earned && styles.badgeItemLocked]}>
              <View style={styles.badgeCircle}>
                <Text style={styles.badgeEmoji}>{badge.icon}</Text>
              </View>
              <Text style={styles.badgeName}>{badge.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Settings */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Settings</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🌙</Text>
          <Text style={styles.actionText}>Dark Mode</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🔔</Text>
          <Text style={styles.actionText}>Notifications</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>✏️</Text>
          <Text style={styles.actionText}>Edit Goal</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <PrimaryButton label="Log Out" onPress={logout} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
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
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    fontSize: 20,
  },
  avatarSection: {
    alignItems: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: spacing.lg,
  },
  levelCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: spacing.lg,
    borderRadius: radius.md,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  levelInfo: {},
  levelLabel: {
    fontSize: 12,
    color: colors.subtext,
    marginBottom: 4,
  },
  levelValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  levelCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelCircleText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  progressSection: {
    width: '100%',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  progressText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  progressPercent: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: colors.backgroundLight,
    padding: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    margin: spacing.lg,
    marginBottom: 0,
    marginTop: spacing.lg,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  badgeItem: {
    width: '30%',
    alignItems: 'center',
    padding: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.background,
  },
  badgeItemLocked: {
    opacity: 0.3,
  },
  badgeCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  badgeEmoji: {
    fontSize: 24,
  },
  badgeName: {
    fontSize: 11,
    color: colors.subtext,
    textAlign: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  actionIcon: {
    fontSize: 20,
    marginRight: spacing.md,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
  },
  chevron: {
    fontSize: 24,
    color: colors.textMuted,
  },
  logoutContainer: {
    padding: spacing.lg,
  },
});
