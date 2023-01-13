import React from 'react'

function Html() {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '50vh',
          left: '20vw',
          transform: 'translateX(-20%)',
          color: '#E73213'
        }}>
        three.js playground
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '140vh',
          left: '50vw',
          transform: 'translateX(-65%)',
          color: '#E73213'
        }}>
        Your Future
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '250vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: '#E73213'
        }}>
        Awaits
      </h1>
    </>
  )
}

export { Html }
