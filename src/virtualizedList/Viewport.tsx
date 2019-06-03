import * as React from "react";
import { useResizeObserver } from "./useResizeObserver";

export const ViewportContext = React.createContext({});

export const Viewport = props => {
  const { style, ...rest } = props;
  const viewportRef = React.useRef(undefined);

  //const viewportRect = useClientRect(viewportRef);

  const viewportRect = useResizeObserver(viewportRef);

  const [viewportState, setViewportState] = React.useState({});
  const viewportStyle = {
    overflow: "scroll",
    outline: "none",
    ...style
  };
  const onScroll = React.useCallback(
    (ev: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, clientHeight, clientTop } = ev.target as HTMLElement;

      setViewportState({
        viewportRect,
        clientTop,
        scrollTop,
        scrollBottom: scrollTop + clientHeight
      });
    },
    [viewportRect]
  );

  return (
    <ViewportContext.Provider value={viewportState}>
      <div
        ref={viewportRef}
        style={viewportStyle}
        tabIndex={0}
        {...rest}
        onScroll={onScroll}
      />
    </ViewportContext.Provider>
  );
};
