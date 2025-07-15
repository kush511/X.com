import React from 'react'
import CustomImage from './Image'

const Search = () => {
  return (
    <div  className='flex px-5 py-3 gap-4 items-center transparent border-1 rounded-3xl border-border-gray'>
      <CustomImage src="/public/icons/explore.svg" alt='' w={20} h={20}/>
    <input type="text"  placeholder='Search' className='placeholder-text-gray-light text-md outline-none' />
    </div>
  )
}

export default Search