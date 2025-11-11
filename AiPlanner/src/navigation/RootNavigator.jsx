import React, { useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import Onboarding from '../screens/Onboarding/Onboarding';
import Login from '../screens/Auth/Login';
import GoalSetting from '../screens/Auth/GoalSetting';
import MainTabs from './MainTabs';
import { QuestProvider } from '../store/QuestContext';
import { UserProvider, useUser } from '../store/UserContext';
import RewardModal from '../components/RewardModal';

function InnerRoot() {
  const { user } = useUser();
  const [stage, setStage] = useState(user ? 'main' : 'onboarding');
  const [reward, setReward] = useState({ visible: false, xp: 0 });

  const openReward = (xp, levelUp) => setReward({ visible: true, xp, levelUp });
  const closeReward = () => setReward({ visible: false, xp: 0 });

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />
      {stage === 'onboarding' && <Onboarding onDone={() => setStage('login')} />}
      {stage === 'login' && <Login onSuccess={() => setStage('goal')} />}
      {stage === 'goal' && <GoalSetting onDone={() => setStage('main')} />}
      {stage === 'main' && <MainTabs onCompleteQuest={openReward} />}
      <RewardModal visible={reward.visible} xp={reward.xp} levelUp={reward.levelUp} onClose={closeReward} />
    </View>
  );
}

export default function RootNavigator() {
  return (
    <UserProvider>
      <QuestProvider>
        <InnerRoot />
      </QuestProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({ root: { flex: 1, backgroundColor: colors.background } });
