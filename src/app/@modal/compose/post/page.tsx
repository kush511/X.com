"use client"
import CustomImage from '@/components/Image'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const PostModal = () => {

    const router = useRouter()

    const closeModel = () => {
        router.back()
    }
    return (
        <div className='absolute w-screen h-screen top-0 left-0 z-10 bg-white/5 flex justify-center'>
            <div className='py-4 px-8 bg-black rounded-xl h-max mt-12 w-[600px]'>
                <div className='flex items-center justify-between'>
                    <div onClick={closeModel} className='cursor-pointer'>X</div>
                    <div className='font-bold text-icon-blue'>Drafts</div>
                </div>


                <div className='py-8 flex gap-4 '>
                    <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                        <CustomImage src='/public/general/pfp.png' alt='' h={100} w={100} tr={true} />
                    </div>
                    <textarea className='flex-1 bg-transparent outline-none text-xl  ' rows={3}  placeholder="What's happening " />
                </div>
                <div className='flex items-center justify-between gap-4 flex-wrap border-t border-border-gray pt-4'>
                    <div className='flex flex-wrap gap-4'>
                        <Image alt="" src="/icons/image.svg"
                            width={20}
                            height={20}
                            className="cursor-pointer" />
                        <Image alt="" src="/icons/gif.svg"
                            width={20}
                            height={20}
                            className="cursor-pointer" />
                        <Image alt="" src="/icons/poll.svg"
                            width={20}
                            height={20}
                            className="cursor-pointer" />
                        <Image alt="" src="/icons/emoji.svg"
                            width={20}
                            height={20}
                            className="cursor-pointer" />
                        <Image alt="" src="/icons/schedule.svg"
                            width={20}
                            height={20}
                            className="cursor-pointer" />
                        <Image alt="" src="/icons/location.svg"
                            width={20}
                            height={20}
                            className="cursor-pointer" />
                    </div>
                    <button className='text-black bg-white px-4 py-2 rounded-full'>Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostModal