import React, { createContext, useContext, useMemo, useState } from 'react';

const initialQuests = [
  { id: 'q1', title: '영어 단어 암기', category: '영어', minutes: 20, difficulty: 'Easy', xp: 120, progress: 0 },
  { id: 'q2', title: '수학 문제 풀이', category: '수학', minutes: 30, difficulty: 'Medium', xp: 200, progress: 0.3 },
  { id: 'q3', title: '역사 요약 정리', category: '사회', minutes: 15, difficulty: 'Easy', xp: 100, progress: 0.7 },
];

const QuestContext = createContext(null);

export function QuestProvider({ children }) {
  const [quests, setQuests] = useState(initialQuests);

  const value = useMemo(
    () => ({
      quests,
      completeProgress: (id, delta = 0.2) => {
        let completed = false;
        let xp = 0;
        setQuests((prev) =>
          prev.map((q) => {
            if (q.id !== id) return q;
            const next = Math.min(1, q.progress + delta);
            completed = next >= 1;
            xp = completed ? q.xp : 0;
            return { ...q, progress: next };
          })
        );
        return { completed, xp };
      },
      resetQuests: () => setQuests(initialQuests),
    }),
    [quests]
  );

  return <QuestContext.Provider value={value}>{children}</QuestContext.Provider>;
}

export function useQuests() {
  const ctx = useContext(QuestContext);
  if (!ctx) throw new Error('useQuests must be used within QuestProvider');
  return ctx;
}
