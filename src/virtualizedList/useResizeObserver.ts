import * as React from "react";

export const useResizeObserver = ref => {
  const [clientRect, setClientRect] = React.useState(undefined);

  const resizeCallback = React.useCallback(entries => {
    console.log("measure");
    setClientRect(entries[0].target.getBoundingClientRect());
  }, []);

  React.useEffect(() => {
    let observer;

    if (ref.current) {
      observer = new window.ResizeObserver(resizeCallback);
      observer.observe(ref.current);
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [ref, resizeCallback]);

  return clientRect;
};
