import * as React from "react";

export const useClientRect = ref => {
  const [state] = React.useState({ isMeasuring: false, rafHandle: 0 });
  const [clientRect, setClientRect] = React.useState(undefined);

  React.useEffect(() => {
    if (!state.isMeasuring && ref.current) {
      state.isMeasuring = true;
      state.rafHandle = requestAnimationFrame(() => {
        state.isMeasuring = false;
        setClientRect(ref.current.getBoundingClientRect());
      });

      return () => cancelAnimationFrame(state.rafHandle);
    }
  }, [ref.current]);

  return clientRect;
};
