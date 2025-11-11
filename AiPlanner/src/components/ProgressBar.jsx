import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radius } from '../theme/colors';

export default function ProgressBar({ progress, height = 10 }) {
  const p = Math.max(0, Math.min(1, progress));
  return (
    <View style={[styles.track, { height }]}> 
      <View style={[styles.fill, { width: `${p * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { backgroundColor: colors.primaryLight, borderRadius: radius.pill, overflow: 'hidden' },
  fill: { backgroundColor: colors.primary, height: '100%' },
});
