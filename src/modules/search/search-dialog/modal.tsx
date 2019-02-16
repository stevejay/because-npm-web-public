import FocusTrap from "focus-trap-react";
import React from "react";
import { Portal } from "react-portal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement<any>;
};

// TODO move to own file:
const useAriaHidden: (id?: string) => void = (id = "root") => {
  React.useEffect(() => {
    const appRoot = document.getElementById(id);
    appRoot && appRoot.setAttribute("aria-hidden", "true");
    return () => {
      appRoot && appRoot.setAttribute("aria-hidden", "false");
    };
  }, []);
};

const useCallbackOnKeydown: (keyCode: number, callback: () => void) => void = (
  keyCode,
  callback
) => {
  React.useEffect(() => {
    const listener: EventListener = (event: any) =>
      event.keyCode === keyCode && callback();
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);
};

const FOCUS_TRAP_OPTIONS = { returnFocusOnDeactivate: true };
const KEY_CODE_ESC = 27;

const ModalInner = ({ onClose, children }: Props) => {
  useAriaHidden("root");
  // TODO I think FocusTrap has this ESC key functionality:
  useCallbackOnKeydown(KEY_CODE_ESC, onClose);
  return (
    <FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS}>{children}</FocusTrap>
  );
};

const Modal = ({ isOpen, children, onClose }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <>
        <div id="overlay" tabIndex={-1} onClick={onClose} />
        <ModalInner isOpen={isOpen} onClose={onClose}>
          {children}
        </ModalInner>
      </>
    </Portal>
  );
};

export default Modal;
