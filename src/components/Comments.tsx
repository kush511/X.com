import React from 'react'
import CustomImage from './Image'
import Post from './Post'

const Comment = () => {
  return (
    <div>
        <form className='flex items-center justify-between gap-4 p-4'>
        <div className='relative w-10 h-10 rounded-full overflow-hidden'>
            <CustomImage src='/public/general/pfp.png' alt='' w={100} h={100} tr={true}/>
        </div>
        <input placeholder='Post your reply' type="text" className='outline-none placeholder-text-gray bg-transparent p-2 text-xl flex-1' />
      <button className='rounded-full py-2 px-4 font-bold bg-white text-black'>Reply</button>
    </form>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>
  )
}

export default Comment