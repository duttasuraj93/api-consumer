import React from 'react'

export default function MovieFetchError() {
  return (
    <>
      <div className='flex-row justify-cont-center ver-pad-60'>
        <div className='default-wrapper pad-hor-20'>
          <div>
            <div className='flex-row justify-cont-center flex-wrap'>
              There was a problem fetching the movie details.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
