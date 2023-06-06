import React, {useState, useCallback} from 'react'
import './index.less'
import {useDrop} from 'react-dnd'
import Box from '../box'

// 屏幕层，一层中有n个box
const Screen = () => {
  // 数据驱动box的移动
  // 一个box包括width，height，id，x，y几个属性
  const [boxes, setBoxes] = useState([{
    width: 80, height: 80, id: '1', x: 0, y: 0,
  }, {
    width: 80, height: 80, id: '2', x: 0, y: 88,
  }])

  // 移动格子
  const moveBox = useCallback((id, x, y) => {
    const newBoxes = [...boxes]
    let index = 0
    let box
    for (let i = 0; i < newBoxes.length; i += 1) {
      if (boxes[i]?.id === id) {
        index = i
        box = boxes[i]
        break
      }
    }
   
    if (box) {
      newBoxes[index] = {...box, x, y}
      console.log(newBoxes, 'newBoxes')
      setBoxes(newBoxes)
    }
  }, [boxes])
  // react-dnd的掉落钩子
  // 这里会托管内部box的移动操作
  const [, drop] = useDrop(() => ({
    accept: 'BOX',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.x + delta.x)
      const top = Math.round(item.y + delta.y)
      console.log(item, delta)
      moveBox(item.id, left, top)
      return undefined
    },
  }), [moveBox])

  return <div ref={drop} className="screen">
    {boxes.map(box => (
      <Box 
        x={box.x} 
        y={box.y} 
        width={box.width} 
        height={box.height} 
        id={box.id} 
      />
    ))}
    
  </div>
}

export default Screen
