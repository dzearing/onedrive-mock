let _styleElement;
let _lastStyleElement;

export function getStyleElement(): HTMLStyleElement {
  if (!_styleElement && typeof document !== "undefined") {
    _styleElement = createStyleElement();

    // Reset the style element on the next frame.
    window.requestAnimationFrame(() => {
      _styleElement = undefined;
    });
  }
  return _styleElement;
}

function createStyleElement(): HTMLStyleElement {
  const styleElement = document.createElement("style");
  const head = document.head!;

  styleElement.type = "text/css";

  if (_lastStyleElement && _lastStyleElement.nextElementSibling) {
    head.insertBefore(styleElement, _lastStyleElement.nextElementSibling);
  } else {
    head.appendChild(styleElement);
  }
  _lastStyleElement = styleElement;

  return styleElement;
}
