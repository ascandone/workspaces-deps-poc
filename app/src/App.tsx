import { FC } from "react";
import { Counter } from "@example-workspace/lib";

export const App: FC = () => (
  <div>
    <Counter initialCount={42} />
  </div>
);
