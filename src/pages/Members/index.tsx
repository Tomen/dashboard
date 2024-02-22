// Copyright 2024 @polkadot-fellows/dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { PageRow, PageTitle } from "@polkadot-ui/react"
import { RequestsGrid } from "./RequestsGrid"

export const Members = () => {
  return (
    <>
      <PageTitle title="Polkadot Fellowship - Members" />
      <PageRow>
        <RequestsGrid />
      </PageRow>
    </>
  )
}
