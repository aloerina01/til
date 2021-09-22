import { useState } from "react";

export const useIncrement = (): [number, () => void] => {
  const [counter, setter] = useState<number>(0);
  const increment = () => setter(counter + 1);
  return [counter, increment];
};
