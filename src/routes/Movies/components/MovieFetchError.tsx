import React from 'react'

export default function MovieFetchError() {
  return (
    <>
      <div className='flex-row justify-cont-center ver-pad-60'>
        <div className='default-wrapper pad-hor-20'>
          <div>
            <h1 className='mar-bot-20'>Upcoming Movies</h1>
            <div className='flex-row justify-cont-space-bet flex-wrap'>
              There was a problem fetching the movies.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
