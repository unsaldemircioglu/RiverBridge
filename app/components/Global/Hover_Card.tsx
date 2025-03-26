import React from 'react'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

function Hover_Card() {
  return (
    <div>
      <HoverCard>
  <HoverCardTrigger className='text-6xl text-yellow-500 font-fr-text-title'>River Bridge</HoverCardTrigger>
  <HoverCardContent>
    Platform
  </HoverCardContent>
</HoverCard>

    </div>
  )
}

export default Hover_Card
  