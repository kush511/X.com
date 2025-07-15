import Feed from '@/components/Feed'
import CustomImage from '@/components/Image'
import Link from 'next/link'
import React from 'react'

const UserPage = () => {
    return (
        <div>
            {/* title  */}
            <div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]'>
                <Link href="/">
                    <CustomImage alt='' w={24} h={24} src='/public/icons/back.svg' />
                </Link>
                <h1 className='font-bold text-lg'>kiri</h1>
            </div>
            {/* Info  */}
            <div>
                {/* cover and avatar  */}
                <div className='relative w-full'>
                    <div className='w-full aspect-[3/1]'>
                        <CustomImage alt='' w={600} h={200} src='/public/general/cover.png' tr={true} />
                    </div>
                    <div className='w-25 h-25 aspect-square border-black absolute left-4 -translate-y-1/2 rounded-full overflow-hidden border-4 bg-gray-300 '>
                        <CustomImage alt='' h={100} w={100} src="/public/general/pfp.png" tr={true} />

                    </div>
                    <div className='w-full justify-end flex gap-2 p-2 items-center'>
                        <div className='h-9 w-9 flex items-center justify-center border-[1px] border-gray-500 rounded-full cursor-pointer'>
                            <CustomImage alt='' h={20} w={20} src="/public/icons/more.svg" />
                        </div>

                        <div className='h-9 w-9 flex items-center justify-center border-[1px] border-gray-500 rounded-full cursor-pointer'>
                            <CustomImage alt='' h={20} w={20} src="/public/icons/explore.svg" />
                        </div>

                        <div className='h-9 w-9 flex items-center justify-center border-[1px] border-gray-500 rounded-full cursor-pointer'>
                            <CustomImage alt='' h={20} w={20} src="/public/icons/message.svg" />
                        </div>
                        <button className='py-2 px-4 bg-white text-black font-bold rounded-full '>
                            Follow
                        </button>
                    </div>

                </div>

                {/* User info  */}
                <div className='p-4 flex flex-col gap-1 '>
                    {/* username and handle  */}
                    <h1 className='font-bold text-lg '>kiri</h1>
                    <span className='text-text-gray text-sm'>@kush</span>
                    <p>Ambition missing. Running on coffee and code.</p>
                    <div className='flex gap-4 text-text-gray text-[15px]'>

                        <div className='flex items-center gap-1 '>
                            <CustomImage alt='' h={20} w={20} src="/public/icons/userLocation.svg" />
                            <span>rajasthan</span>

                            <CustomImage alt='' h={20} w={20} src="/public/icons/date.svg" />
                            <span>Joined may 2024</span>


                        </div>

                    </div>

                    <div className='flex gap-4'>
                        <div className='flex items-center gap-1'>
                            <span className='font-bold'>180</span>
                            <span className='text-text-gray'>Following</span>
                        </div>

                        <div className='flex items-center gap-1'>
                            <span className='font-bold'>132</span>
                            <span className='text-text-gray'>Followers</span>
                        </div>
                    </div>
                </div>

                
            </div>
        {/* feed  */}
        <Feed/>

        </div>
    )
}

export default UserPage