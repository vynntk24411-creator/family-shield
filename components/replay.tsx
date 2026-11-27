"use client";

import { createContext, useCallback, useContext, useState, type ComponentProps, type ReactNode } from "react";

type ReplayContextValue = { round: number; replay: () => void };

const ReplayContext = createContext<ReplayContextValue>({ round: 0, replay: () => {} });

export function ReplayProvider({ children }: { children: ReactNode }) {
  const [round, setRound] = useState(0);
  const replay = useCallback(() => setRound((r) => r + 1), []);
  return <ReplayContext.Provider value={{ round, replay }}>{children}</ReplayContext.Provider>;
}

// Remounting the subtree restarts every CSS animation inside it, like cloning the node did in the original prototype.
export function ReplayArea({ children }: { children: ReactNode }) {
  const { round } = useContext(ReplayContext);
  return (
    <div className="anim" key={round}>
      {children}
    </div>
  );
}

export function ReplayButton(props: ComponentProps<"button">) {
  const { replay } = useContext(ReplayContext);
  return <button type="button" {...props} onClick={replay} />;
}
