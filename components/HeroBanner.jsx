import React from 'react'

const HeroBanner = (props) => {
  return (
    <div className='hero min-h-[75vh] pt-min-[4rem]' style={{ backgroundImage: `url("${props.image}")` }}>
      <div className='hero-overlay bg-opacity-60' />
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>Welcome to Bluebyte</h1>
          <p className='mb-5'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className='btn btn-primary'>Start buying</button>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
