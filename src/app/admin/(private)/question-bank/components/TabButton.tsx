import React from 'react'
import { Button } from 'rizzui'

export default function TabButton({
  tab,
  onClick,
  active,
  icon,
}: {
  tab: { label: string; value: string }
  onClick: () => void
  active: boolean
  icon: React.ReactNode
}) {
  return (
    <Button variant={active ? 'solid' : 'outline'} color="primary" onClick={onClick}>
      {icon} {tab.label}
    </Button>
  )
}
