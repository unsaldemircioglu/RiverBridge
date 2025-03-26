import React from 'react'


import Hover_Card from "../Global/Hover_Card";

import { Separator } from "@/components/ui/separator"

function Magazine() {
  return (
    <aside className='left-40'>

    <div className='p-20'>
      <div>
      <div className="space-y-1">
      <h4 className="text-sm font-medium leading-none font-fr-text-subtitle text-yellow-500">River Bridge</h4>
        <p className="text-sm text-muted-foreground font-fr-text">
        River Bridge 2.2.1 Published.
        </p>
      </div>
      <Hover_Card></Hover_Card>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Read</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
    </div>


    </aside>
  )
}

export default Magazine
