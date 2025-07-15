import React from 'react'
import CustomImage from './Image'
import Link from 'next/link'

const PopularTags = () => {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-border-gray flex flex-col gap-4'>
      <h1 className=' font-bold text-xl text-text-gray-light'>What's happening</h1>
  <div className='flex gap-3'>
     <div className=' overflow-hidden relative h-20 w-20 '>
    <CustomImage className='rounded-xl aspect-square ' src='/public/general/event2.jpg' alt='' w={100} h={120}/>
   
   </div>
   <div className='flex-1 flex-col text-white'>
    <h2 className='font-bold text-lg'>MLB ALL-Star WEEK 2025</h2>
    <div className='text-border-gray'>LIVE</div>
     </div>
  </div>

  {/* TOPICS  */}
  <div className='flex flex-col flex-1 gap-3'>
    <div className='flex justify-between '>
      <div className='p-2 mt-2'>
        <div className='text-text-gray'>Outdoors Trending</div>
        <div className='font-semibold text-xl'>#INDvsENG</div>
        <div className='text-text-gray'>6,237 posts</div>
      </div>
      <div className='text-text-gray font-bold'>...</div>
    </div>

    <div className='flex justify-between '>
      <div className='p-2 mt-2'>
        <div className='text-text-gray'>Sports Trending</div>
        <div className='font-semibold text-xl'>#INDvsENG</div>
        <div className='text-text-gray'>5,333 posts</div>
      </div>
      <div className='text-text-gray font-bold'>...</div>
    </div>

    <div className='flex justify-between '>
      <div className='p-2 mt-2'>
        <div className='text-text-gray'>Trending in india</div>
        <div className='font-semibold text-xl'>Ashish</div>
        <div className='text-text-gray'>3,233 posts</div>
      </div>
      <div className='text-text-gray font-bold'>...</div>
    </div>

  </div>
  <Link href ='/' className="text-icon-blue">Show More</Link>
    </div>
  )
}

export default PopularTags