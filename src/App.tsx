import React from 'react'
import { CallGPT } from './api/gpt'
import classNames from 'classnames/bind'
import styles from './App.modules.scss'

const cx = classNames.bind(styles)
function App() {
  const handleClickAPICall = async () => {
    await CallGPT()
  }
  return (
    <div className={cx('container')}>
      <button onClick={handleClickAPICall}>클릭</button>
    </div>
  )
}

export default App
