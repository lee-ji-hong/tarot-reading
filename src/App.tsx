import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import { CallGPT } from './api/gpt'
import classNames from 'classnames/bind'
import styles from './App.modules.scss'

import MessageBox from '@shared/MessageBox'

const cx = classNames.bind(styles)

function App() {
  const [data, setData] = useState<string>("안녕? 나는 점쟁이라고해. 너의 고민이나 어떤 것이든 들어줄 수 있어. 고민이 뭐야?");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const endpoint = '/chat/completions';

  return (
    <div className={cx('container')}>
      <MessageBox title='점쟁이'/>
    </div>
  )
}

export default App
