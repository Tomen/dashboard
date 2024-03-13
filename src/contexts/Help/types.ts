// Copyright 2024 @polkadot-fellows/dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { ReactNode } from "react"
import type { MaybeString } from "types"

export type HelpItems = HelpItem[]

export interface HelpItem {
  key?: string
  definitions?: string[]
  external?: ExternalItems
  alternative?: ExternalItems
}

export type ExternalItems = ExternalItem[]
export type ExternalItem = [string, string, string]

export type DefinitionWithKeys = {
  title: string
  description: string[]
}

export interface ExternalWithKeys {
  title: string
  url: string
  website?: string
}

export interface HelpContextInterface {
  openHelp: (d: MaybeString) => void
  closeHelp: () => void
  setStatus: (s: number) => void
  setDefinition: (d: MaybeString) => void
  status: number
  definition: MaybeString
}

export interface HelpContextState {
  status: number
  definition: MaybeString
}

export interface HelpContextProps {
  children: ReactNode
}

export type HelpConfig = Record<string, string | any>
