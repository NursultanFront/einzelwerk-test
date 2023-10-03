"use client";
import { PropsWithChildren, useEffect } from "react";
import Modal from "react-modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(6px)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    width: "640px",
    borderRadius: "32px",
  },
};

export const Popup: React.FC<PropsWithChildren<IProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      return;
    }
    document.documentElement.style.overflow = "";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};
