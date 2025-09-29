import * as React from 'react'
import { Outlet, createRootRoute, createFileRoute } from '@tanstack/react-router'

export const Route = createRootRoute('/__root/orig')({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  )
}
