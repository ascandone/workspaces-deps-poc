import { FC, useState } from "react";

export type CounterProps = {
  initialCount: number;
};

export const Counter: FC<CounterProps> = () => {
  const [count, setState] = useState(0);

  return (
    <button onClick={() => setState(count + 1)}>Increment: {count}</button>
  );
};
