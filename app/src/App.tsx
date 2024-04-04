import { FC } from "react";
import { LegacyCounter } from "@example-workspace/lib";
import { ModernCounter } from "./ModernCounter";

export const App: FC = () => (
  <div>
    <ModernCounter initialCount={42} />
    <LegacyCounter initialCount={42} />
  </div>
);
