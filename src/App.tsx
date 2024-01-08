import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import { CallGPT } from './api/gpt'
import classNames from 'classnames/bind'
import styles from './App.modules.scss'

const cx = classNames.bind(styles)

function App() {
  const endpoint = '/chat/completions'
  // const { isLoading, error, data } = use Query<string>('posts', () => CallGPT(endpoint))
  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className={cx('container')}>
      {/* {data} */}
      안녕하세요! 무엇을 도와드릴까요?
    </div>
  )
}

export default App
