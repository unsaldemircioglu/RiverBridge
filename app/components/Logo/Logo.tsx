import React from 'react'
import { GiTowerBridge } from "react-icons/gi";

function Logo() {
  return <a href="/" className="flex items-center gap-2">
    <GiTowerBridge size={35} color="#e4dd11" />
    <p className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent'>
        River Bridge
    </p>
  </a>;
}

export default Logo
