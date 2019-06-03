import * as React from "react";
import { ViewportContext } from "./Viewport";
import { useClientRect } from "./useClientRect";

const getVisibleRanges = ({ items, itemSize, viewport, surfaceRect }) => {
  if (viewport && viewport.viewportRect && surfaceRect) {
    const margin = 0; //viewport.viewportRect.height;

    const surfaceTop =
      viewport.viewportRect.top - surfaceRect.top + viewport.scrollTop;
    const start = Math.max(
      0,
      Math.floor((surfaceTop - margin) / itemSize.height)
    );
    const end = Math.min(
      items.length,
      Math.ceil(
        (surfaceTop + viewport.viewportRect.height + margin) / itemSize.height
      )
    );

    // console.log(`${start}-${end}`);
    return [{ start, end }];
  } else {
    console.log("woops no visible stuff", viewport.viewportRect, surfaceRect);
  }

  return [
    {
      start: 0,
      end: Math.min(
        items.length,
        Math.ceil(window.outerHeight / itemSize.height)
      )
    }
  ];
};

export const FixedList = props => {
  const {
    as: C = "div",
    items = [],
    itemProps,
    itemAs: Item,
    itemSize,
    style,
    ...p
  } = props;
  const [listState] = React.useState({ styles: {} });
  const surfaceRef = React.useRef(undefined);
  const viewport = React.useContext(ViewportContext);
  const surfaceRect = useClientRect(surfaceRef);
  const children = [];

  // Derive visible range based on the top of the surface relative to the viewport.
  const visibleRanges = getVisibleRanges({
    items,
    itemSize,
    viewport,
    surfaceRect
  });

  const ListStyle = {
    position: "relative",
    height: `${items.length * itemSize.height}px`,
    ...style
  };

  for (const range of visibleRanges) {
    for (let i = range.start; i < range.end; i++) {
      const item = items[i];
      const style = (listState.styles[i] = listState.styles[i] || {
        ...itemProps.style,
        position: "absolute",
        width: "100%",
        height: `${itemSize.height}px`,
        //transform: `translate(0, ${i * itemSize.height}px)`
        top: i * itemSize.height
      });

      const calculatedProps = {
        ...itemProps,
        index: i,
        item,
        style,
        key: item.key
      };

      children.push(<Item {...calculatedProps} />);
    }
  }

  return <C {...p} ref={surfaceRef} style={ListStyle} children={children} />;
};
