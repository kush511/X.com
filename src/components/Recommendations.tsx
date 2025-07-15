import Link from 'next/link'
import React from 'react'
import CustomImage from './Image'

const Recommendations = () => {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-border-gray flex flex-col gap-4'>
       <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 '>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <CustomImage alt='' h={100} w={100} src="/public/general/pfp.png"/>
          </div>
          <div className=''>
            <h1 className='text-md font-bold'>Striver</h1>
            <span className='text-text-gray text-sm'>@striver</span>
          </div>
        </div>
        {/* Button  */}
        <button className='py-1 px-4 rounded-full font-semibold bg-white text-black'>Follow</button>
       </div>

        <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 '>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <CustomImage alt='' h={100} w={100} src="/public/general/pfp.png"/>
          </div>
          <div className=''>
            <h1 className='text-md font-bold'>Shivangi
</h1>
            <span className='text-text-gray text-sm'>@Shivangitwt</span>
          </div>
        </div>
        {/* Button  */}
        <button className='py-1 px-4 rounded-full font-semibold bg-white text-black'>Follow</button>
       </div>

        <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 '>
          <div className='relative rounded-full overflow-hidden w-10 h-10'>
            <CustomImage alt='' h={100} w={100} src="/public/general/pfp.png"/>
          </div>
          <div className=''>
            <h1 className='text-md font-bold'>Adam Wathan
</h1>
            <span className='text-text-gray text-sm'>@AdamWathan
</span>
          </div>
        </div>
        {/* Button  */}
        <button className='py-1 px-4 rounded-full font-semibold bg-white text-black'>Follow</button>
       </div>
       <Link href="/" className='text-icon-blue'>
       Show more</Link>
       </div>
  )
}

export default Recommendations