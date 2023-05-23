import React from 'react'
import './index.less'
import Box from '../box'

const Screen = () => {
  console.log('screen')
  return <div className="screen">
    <Box width={80} height={80} />
  </div>
}

export default Screen
