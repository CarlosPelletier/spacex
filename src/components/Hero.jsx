import React from 'react'

const Hero = () => {
  return (
    <section className='lg:bg-herobg md:bg-herobg-md md:bg-top lg:bg-center bg-cover bg-no-repeat h-screen w-full bg-herobg-sm'>
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <div className='flex flex-col items-center pt-6 lg:pt-[calc(35vh-4.5rem)]'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                Vive el espacio de
                <span className='bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text'>{''} otra manera</span>
            </h1>
        </div>
      </div>
    </section>
  )
}

export { Hero }

// [calc(100%-4.5rem)]