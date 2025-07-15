
import Comment from '@/components/Comments'
import CustomImage from '@/components/Image'
import Post from '@/components/Post'
import Link from 'next/link'
import React from 'react'

const StatusPage = () => {
  return (
    <div>
        <div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]'>
                <Link href="/">
                    <CustomImage alt='' w={24} h={24} src='/public/icons/back.svg' />
                </Link>
                <h1 className='font-bold text-lg'>Post</h1>
                
            </div>
            <Post type="status"/>
            <Comment/>
    </div>
  )
}

export default StatusPage