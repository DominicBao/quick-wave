import React from 'react'
import './index.less'
import {useDrag} from 'react-dnd'

const Box = ({
  width = 0,
  height = 0,
  x = 0,
  y = 0,
  id,
}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'BOX',
    item: {id, x, y},
    collect: monitor => {
      return {
        // 是否正在拖拽
        isDragging: !!monitor.isDragging(),
      }
    },
  }), [x, y, id])

  return <div ref={drag} className="box" style={{width: `${width}px`, height: `${height}px`, left: `${x}px`, top: `${y}px`}}>
    <span className="no-event">这是一个box</span>
  </div>
}

export default Box
