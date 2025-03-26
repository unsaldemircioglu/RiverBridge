import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function LanguageDropdown() {
  return (
    <div>

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Language" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="TR">TR</SelectItem>
    <SelectItem value="EN">EN</SelectItem>
    <SelectItem value="FR">FR</SelectItem>
  </SelectContent>
</Select>

    </div>
  )
}

export default LanguageDropdown
