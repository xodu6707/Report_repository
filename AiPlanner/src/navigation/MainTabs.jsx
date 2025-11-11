import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme/colors';
import Home from '../screens/Main/Home';
import QuestList from '../screens/Main/QuestList';
import Profile from '../screens/Main/Profile';
import Guild from '../screens/Main/Guild';
import { useQuests } from '../store/QuestContext';
import { useUser } from '../store/UserContext';

export default function MainTabs({ onCompleteQuest }) {
  const [tab, setTab] = useState('home');
  const { quests, completeProgress } = useQuests();
  const { addXP } = useUser();

  const handleStartQuest = (id) => {
    const { completed, xp } = completeProgress(id);
    if (completed && xp > 0) {
      const { levelUp } = addXP(xp);
      onCompleteQuest(xp, levelUp);
    }
  };

  return (
    <View style={styles.container}>
      {tab === 'home' && <Home quests={quests} onStartQuest={handleStartQuest} />}
      {tab === 'quests' && <QuestList quests={quests} onStartQuest={handleStartQuest} />}
      {tab === 'guild' && <Guild />}
      {tab === 'profile' && <Profile />}

      <View style={styles.tabbar}>
        <TabItem icon="🏠" label="Home" active={tab === 'home'} onPress={() => setTab('home')} />
        <TabItem icon="📋" label="Quests" active={tab === 'quests'} onPress={() => setTab('quests')} />
        <TabItem icon="👥" label="Guild" active={tab === 'guild'} onPress={() => setTab('guild')} />
        <TabItem icon="👤" label="Profile" active={tab === 'profile'} onPress={() => setTab('profile')} />
      </View>
    </View>
  );
}

function TabItem({ icon, label, active, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tab}>
      <Text style={[styles.tabIcon, active && styles.tabIconActive]}>{icon}</Text>
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabbar: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundLight,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: 8,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  tabIconActive: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: colors.primary,
    fontWeight: '600',
  },
});
