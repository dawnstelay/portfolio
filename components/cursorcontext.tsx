'use client'

import { createContext, useState, useContext, ReactNode } from "react"

export type CursorVariant = 'cursorEnter' | 'cursorLeave'

type CursorContextType = {
  variant: CursorVariant
  animateCursor: (variant: CursorVariant) => void
}

const CursorContext = createContext<CursorContextType | null>(null)

export const useCursorContext = () => {
  const context = useContext(CursorContext)

  if (!context) {
    throw new Error('something is wrong buddy')
  }

  return context
}

type ProviderProps = {
  children: ReactNode
}

export const CursorContextProvider = ({ children }: ProviderProps) => {
  const [variant, setVariant] = useState<CursorVariant>('cursorLeave')

  const animateCursor = (variant: CursorVariant) => {
    setVariant(variant)
  }

  return (
    <CursorContext.Provider value={{ variant, animateCursor }}>
      {children}
    </CursorContext.Provider>
  )
}