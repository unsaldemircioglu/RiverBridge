
import Image from 'next/image'
import React from 'react'
import Logo from "@/app/components/Logo/Logo";
function Team() {
  return (
    <div className='flex justify-around p-20'>
      <div>
      <Image
      src="https://images.pexels.com/photos/26045790/pexels-photo-26045790/free-photo-of-kral-penguenler.jpeg?auto=compress&cs=tinysrgb&w=300"
      width={200}
      height={200}
      alt="team"
      />
      <h3>Ünsal Demircioğlu</h3>
      <p><strong>Leader / CEO </strong></p>
      <Logo />
      </div>


      <div>
      <Image
      src="https://images.pexels.com/photos/26045790/pexels-photo-26045790/free-photo-of-kral-penguenler.jpeg?auto=compress&cs=tinysrgb&w=300"
      width={200}
      height={200}
      alt="team"
      />
      <h3>Yağız Erkan</h3>
      <p><strong>Research Team</strong></p>
      <Logo />
      </div>



      <div>
      <Image
      src="https://images.pexels.com/photos/26045790/pexels-photo-26045790/free-photo-of-kral-penguenler.jpeg?auto=compress&cs=tinysrgb&w=300"
      width={200}
      height={200}
      alt="team"
      />
      <h3>Melih Yurt</h3>
      <p><strong>Presentation Director</strong></p>
      <Logo />
      </div>


    </div>
  )
}

export default Team
