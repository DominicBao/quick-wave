import React from 'react'
import './index.less'

const Box = ({
  width = 0,
  height = 0,
}) => {
  return <div className="box" style={{width: `${width}px`, height: `${height}px`}}>
    <span>这是一个box</span>
  </div>
}

export default Box
