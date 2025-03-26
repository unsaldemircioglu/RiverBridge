
import React from 'react'


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'

  
function Architect_App() {
  return (
    <div className='w-5/6 ml-auto mr-auto mt-6'>
     <div className='font-fr-text-title'>
     <h1 className='text-3xl -text-muted-foreground'>
      Discover <span className='text-red-900 font-fr-text-title '>River Bridge</span> Community.
      </h1>

<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"><span className='text-red-900 font-fr-text-title '>Our Community</span></h2>
<ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
    <li>
        <span className="font-semibold text-gray-900 dark:text-white">Install App</span> 
    </li>
    <li>
        <span className="font-semibold text-gray-900 dark:text-white">Regsiter</span>
    </li>
    <li>
        <span className="font-semibold text-gray-900 dark:text-white">Finally Login</span>
    </li>
</ol>


<Button>Download</Button>

    <AlertDialog>
  <AlertDialogTrigger>Get Information</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Our App</AlertDialogTitle>
      <AlertDialogDescription>
        Our App
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Ok</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

     </div>
    </div>
  )
}

export default Architect_App
