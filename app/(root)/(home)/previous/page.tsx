import CallList from '@/components/ui/CallList'
import { Call } from '@stream-io/video-react-sdk'
import React from 'react'

const Previous = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Previous classes attended
      </h1>

      <CallList type='ended'/>
    </section>
  )
}

export default Previous