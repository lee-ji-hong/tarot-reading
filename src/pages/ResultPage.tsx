import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil';
import classNames from 'classnames/bind'
import styles from './ResultPage.module.scss'
import { LuckData } from '@recoil/atom';
import MessageBox from '@shared/MessageBox'

const cx = classNames.bind(styles)

function ResultPage() {
  const data = useRecoilValue(LuckData);

  console.log(data)

  return (
    <div className={cx('container')}>
      결과페이지
    </div>
  )
}

export default ResultPage
