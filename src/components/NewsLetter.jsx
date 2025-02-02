import React from 'react'
import Button from './share/Button'

function NewsLetter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <input className='p-3 flex w-full rounded-md' type="email" placeholder='Enter Email' />
                    <Button version='primary' styles='ml-4 font-medium'>Notify me</Button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00DF9A]'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter