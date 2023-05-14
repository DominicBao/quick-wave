import React, {useState, useEffect} from 'react'

const Text = () => {
  const [data, setData] = useState('1')
  useEffect(() => {
    setData('2')
  }, [])
  return <div>{data}</div>
}

export default Text
