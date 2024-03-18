import React from 'react'

const Header = () => {
  return (
    <>
        <div className='absolute w-full h-full  top-0 left-0 bg-slate-600/25
        flex flex-col  items-end 
        justify-center gap-2 font-mono
        '>
            
          <div className='w-3/4  m-0 text-white text-lg mt-2 z-10 mr-48'>
          <h1 className='m-0 text-white
                text-5xl font-bold  mr-10
            '>
                Planet: EARTH
            </h1>

            <h4 className=' m-0 text-white text-lg mt-2  mr-40
            '>
                Status: Habitual
            </h4>
          </div>

          <div className='w-72  m-0 text-white text-lg mt-2 z-10 mr-48'>
          <h3>About:</h3>
            <p>
            Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust.
            </p>
          </div>

        </div>
    </>
  )
}

export default Header