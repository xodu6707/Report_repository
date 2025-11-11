import React, { createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = useMemo(
    () => ({
      user,
      login: (email) => setUser({ name: email.split('@')[0] || 'Learner', email, level: 1, xp: 0, dailyGoalMinutes: 30 }),
      setDailyGoal: (min) => setUser((u) => (u ? { ...u, dailyGoalMinutes: min } : u)),
      addXP: (gain) => {
        let levelUp = false;
        setUser((u) => {
          if (!u) return u;
          const nextXP = u.xp + gain;
          if (nextXP >= 1000) {
            levelUp = true;
            return { ...u, level: u.level + 1, xp: nextXP - 1000 };
          }
          return { ...u, xp: nextXP };
        });
        return { levelUp };
      },
      logout: () => setUser(null),
    }),
    [user]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
