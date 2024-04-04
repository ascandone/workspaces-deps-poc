import { FC, useState } from "react";

export type CounterProps = {
  initialCount: number;
};

export const ModernCounter: FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <button onClick={() => setCount(count + 1)}>
      Increment with hooks: {count}
    </button>
  );
};
