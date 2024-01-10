import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import classNames from 'classnames/bind'
import styles from './StartPage.module.scss'

import MessageBox from '@shared/MessageBox'

const cx = classNames.bind(styles)

function StartPage() {
  return (
    <div className={cx('container')}>
      <MessageBox title='점쟁이'/>
    </div>
  )
}

export default StartPage
