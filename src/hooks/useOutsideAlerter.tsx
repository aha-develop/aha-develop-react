import { useEffect, useState } from "react";

type MouseEventKeyMap<T> = {
  [P in keyof T as T[P] extends MouseEvent ? P : never]: T[P];
};
type MouseEventKey = keyof MouseEventKeyMap<DocumentEventMap>;

interface Options {
  /** The mouse event to listen for. Defaults to "mousedown" */
  event?: MouseEventKey;
}

export function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void,
  options: Options = {}
) {
  const [root, setRoot] = useState<ShadowRoot | null>(null);
  const event: MouseEventKey = options.event || "mousedown";

  useEffect(() => {
    if (!ref.current) return;

    let parent: Node | null = ref.current;
    while (parent) {
      if (parent instanceof ShadowRoot) {
        setRoot(parent);
        break;
      }
      parent = parent.parentNode;
    }
  }, [ref.current]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target &&
        ref.current &&
        !ref.current.contains(event.target as Element)
      ) {
        if (root && (event.target as Element).shadowRoot === root) return;
        callback(event);
      }
    }

    document.addEventListener(event, handleClickOutside);
    if (root) {
      root.addEventListener(event, handleClickOutside as any);
    }

    return () => {
      document.removeEventListener(event, handleClickOutside);
      if (root) {
        root.removeEventListener(event, handleClickOutside as any);
      }
    };
  }, [ref.current, callback, root]);
}
