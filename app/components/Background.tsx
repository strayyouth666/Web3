import ParticlesBg from 'particles-bg'
import React from 'react'

const Background: React.FC = () => {
  return (
    <div
      className='fixed inset-0 flex items-center justify-center'
      style={{ pointerEvents: 'none', backgroundColor: '#301934' }}
    >
      <div className='flex justify-center items-center h-screen'>
        <div className='text-white' style={{ fontSize: '8em', fontWeight: 800 }}>
          flxthesixth
        </div>
      </div>
      <ParticlesBg color="#000435" num={200} type="tadpole" bg={true} />
    </div>
  )
}

export default Background
