"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';

interface CursorCtxProps {
  children: React.ReactNode;
}

export interface CursorCtx {
  cursorText: string,
  cursorVariant: string,
  setCursorText: React.Dispatch<React.SetStateAction<string>>;
  setCursorVariant: React.Dispatch<React.SetStateAction<string>>;
}

export const CursorProvider = ({ children }: CursorCtxProps) => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
      <CursorContext.Provider value={{ setCursorText, setCursorVariant, cursorVariant, cursorText }}>
        {children}
      </CursorContext.Provider>
  );
};

export const CursorContext = createContext({} as CursorCtx);
export const useCursor = () => useContext(CursorContext);