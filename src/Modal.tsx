import { useEffect, useRef, MutableRefObject, ReactElement } from "react";
import { createPortal } from "react-dom";

// typescript will automatically detech the type so, we used the React Element
const Modal = ({ children }: { children: ReactElement }) => {
  // MutableRefObject is either null or, HTMLDivElement
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) { return; }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    }
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
