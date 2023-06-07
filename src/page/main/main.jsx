import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Screen from '../../components/screen'
import List from '../../components/list'
import './main.less'

// 使用DndProvider的一个注意点
// DndProvider不可以和钩子在一个组件中
const Main = () => {
  return <div className="main">
    <DndProvider backend={HTML5Backend}>
      <List />
      <Screen />
    </DndProvider>
  </div>
}

export default Main
