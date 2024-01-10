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

  const getImagePath = (index: number) => `/assets/images/card${index + 1}.png`;
  console.log(data)

  return (
    <div className={cx('container')}>
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className={cx('wrap-image')}
          onClick={() => alert('클릭')}
        >
          <img src={getImagePath(idx)} alt={`card ${idx + 1}`} />
        </div>
      ))}
    </div>
  )
}

function cardInfo(){
  return (
    <div>
      테스트
    </div>
  )
}

export default ResultPage
