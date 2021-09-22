// import * as React from "react";

import { useIncrement } from "src/hooks/increment";

export const Hello: React.FC<{ name: string }> = ({ name }) => {
  const [count, increment] = useIncrement();
  increment();
  return (
    <p>
      <span>Hello, </span>
      <span>
        {count}回目の{name}
      </span>
    </p>
  );
};
