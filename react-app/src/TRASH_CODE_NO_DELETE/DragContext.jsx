import React, { createContext, useContext, useCallback, useRef, useState } from 'react';

const DragContext = createContext(null);

export function DragProvider({ children }) {
  const [activeId, setActiveIdState] = useState(null);
  const activeIdRef = useRef(null);
  const positionsRef = useRef({});
  const grabOffsetRef = useRef({ x: 0, y: 0 });
  const parentRef = useRef(null);
  const elementRefs = useRef({});

  const setActiveId = useCallback((id) => {
    activeIdRef.current = id;
    setActiveIdState(id);
  }, []);

  const registerElement = useCallback((id, node) => {
    if (node) {
      elementRefs.current[id] = node;
    } else {
      delete elementRefs.current[id];
    }
  }, []);

  const updatePosition = useCallback((id, x, y) => {
    positionsRef.current[id] = { x, y };
  }, []);

  return (
    <DragContext.Provider
      value={{
        activeId,
        activeIdRef,
        setActiveId,
        positionsRef,
        grabOffsetRef,
        parentRef,
        registerElement,
        updatePosition,
      }}
    >
      {children}
    </DragContext.Provider>
  );
}

export function useDrag() {
  return useContext(DragContext);
}
