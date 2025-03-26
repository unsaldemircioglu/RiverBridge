"use client"
import React from 'react'
import Navbar from '../components/Navbar/Navbar'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Footer from '../components/Footer/Footer'

  
function page() {
  return (
    <article>
        <Navbar/>
        <div className=' w-3/4  mr-auto ml-auto'>
        {/*Accordion*/}
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Who Are We?</AccordionTrigger>
    <AccordionContent>
    We are a passionate, energetic, and dynamic group of students deeply committed to learning and development. Our goal is to help and support people who share the same passion. With this aim in mind, we established River Bridge.
    River Bridge is a platform that brings together individuals who are eager for knowledge and education and who constantly want to improve themselves. Here, we not only share knowledge but also inspire each other and grow together. Our mission is to create a worldwide impact and make learning processes more accessible and enjoyable.
    </AccordionContent>
  </AccordionItem>
</Accordion>
{/*Accordion*/}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Our Mission</AccordionTrigger>
    <AccordionContent>
    Our mission is to provide equal opportunities for everyone on their learning and personal development journey. We support individuals with various resources, educational materials, and community activities. Each member of our community shares their knowledge and experience, contributing to the development of others. This way, there is a flow of knowledge and experience, allowing everyone to transform into a better version of themselves.
    </AccordionContent>
  </AccordionItem>
</Accordion>
{/*Accordion*/}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Our Values</AccordionTrigger>
    <AccordionContent>
    Learning and Development: We focus on constantly learning new things and improving our existing knowledge.

Community and Solidarity: We believe we are stronger together and are always ready to support each other.

Inspiration and Motivation: We inspire and motivate each other to help each individual reach their full potential.

Accessibility: Making education and knowledge accessible to everyone is one of our top priorities.
    </AccordionContent>
  </AccordionItem>
</Accordion>
{/*Accordion*/}
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Steps to Solve a Problem</AccordionTrigger>
    <AccordionContent>
    To solve a problem, start by accurately defining the issue. Then, identify the root cause of the situation and conduct research to find possible solutions. Develop multiple solutions if possible, and evaluate each one to select the most appropriate. Implement the chosen solution while monitoring progress regularly, making adjustments as needed. Finally, assess the effectiveness of the implemented solution and document the lessons learned to prevent similar issues in the future.
    </AccordionContent>
  </AccordionItem>
</Accordion>


        </div>
        {/* Footer Menu */}
        <Footer/>

    </article>
  )
}

export default page
