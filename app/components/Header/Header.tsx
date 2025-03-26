"use client"
// import Image from 'next/image'
import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='bg-white window'>

        <h1 className='text-3xl text-yellow-200 left-6 font-fr-text-title ml-12 mt-5'>Welcome to Our Community</h1>
        <p className='text-yellow-600 ml-12 font-fr-text'>
        Here, you can feel completely free. In our community, you can make new friends and share the topics you are interested in and curious about with other members. Through this sharing, you can receive feedback, gain new ideas and perspectives.
<strong>We are a large and strong community.</strong>
This community is built on knowledge, love, and support. Each members contribution enriches and grows this community. You too can share your experiences, knowledge, and skills here, contributing to the development of the community.
        </p>
      </div>
    </header>
  )
}

export default Header
