import React from 'react'

// import Image from "next/image";

import Our_App from "./OurApp"
import Magazine from './Magazine';
import Header from '../Header/Header';
import Custom_Chart from "./Custom_Chart";

function Articles() {
  return (
    <article>
          <aside className='border'>
            <Header/>
            <Our_App/>
            <Custom_Chart/>
            <Magazine/>
          </aside>
    </article>
  )
}

export default Articles
