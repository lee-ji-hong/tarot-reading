import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import { CallGPT } from './api/gpt'
import classNames from 'classnames/bind'
import styles from './App.modules.scss'

import MessageBox from '@shared/MessageBox'

const cx = classNames.bind(styles)

function App() {
  const endpoint = '/chat/completions'
  // const { isLoading, error, data } = use Query<string>('posts', () => CallGPT(endpoint))
  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className={cx('container')}>
      {/* {data} */}
      
      <MessageBox title='점쟁이'>
        안녕? 나는 점쟁이라고해. 너의 고민이나 어떤 것이든 들어줄 수 있어. 고민이 뭐야?
      </MessageBox>
    </div>
  )
}

export default App
