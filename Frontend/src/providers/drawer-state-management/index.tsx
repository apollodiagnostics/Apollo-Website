'use client'

import { createContext, useContext, useState, ReactNode, useMemo } from 'react'

interface DrawerStateContextProps {
  drawerState: number
  toggleDrawerState: () => void
  handleNextDrawer: () => void
  handlePrevDrawer: () => void
  setDrawer: (state: number) => void
}

const DrawerStateContext = createContext<DrawerStateContextProps | undefined>(
  undefined
)

export const useDrawerState = (): DrawerStateContextProps => {
  const context = useContext(DrawerStateContext)
  if (!context) {
    throw new Error('useDrawerState must be used within a DrawerStateProvider')
  }
  return context
}

interface DrawerStateProviderProps {
  children: ReactNode
}

export function DrawerStateProvider({ children }: DrawerStateProviderProps) {
  const [drawerState, setDrawerState] = useState(0)
  const handleNextDrawer = () => {
    setDrawerState((prevState) => prevState + 1)
  }

  const handlePrevDrawer = () => {
    setDrawerState((prevState) => prevState - 1)
  }

  const toggleDrawerState = () => {
    setDrawerState((prevState) => (prevState === 0 ? 1 : 0))
  }

  const setDrawer = (state: number) => {
    setDrawerState(state)
  }

  return useMemo(
    () => (
      <DrawerStateContext.Provider
        value={{
          drawerState,
          handleNextDrawer,
          handlePrevDrawer,
          toggleDrawerState,
          setDrawer,
        }}
      >
        {children}
      </DrawerStateContext.Provider>
    ),
    [children, drawerState]
  )
}
