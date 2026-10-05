import React, { createContext, useContext, useState } from 'react';

export type ModalType = 
  | 'downloads' 
  | 'terms' 
  | 'privacy' 
  | 'cookies' 
  | 'partner' 
  | 'school-sips' 
  | 'school-qurum' 
  | 'school-mouj' 
  | 'video' 
  | null;

interface ModalContextType {
  activeModal: ModalType;
  videoUrl: string | null;
  openModal: (type: ModalType, videoUrl?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  videoUrl: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const openModal = (type: ModalType, url?: string) => {
    setActiveModal(type);
    if (url) setVideoUrl(url);
  };

  const closeModal = () => {
    setActiveModal(null);
    setVideoUrl(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, videoUrl, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
