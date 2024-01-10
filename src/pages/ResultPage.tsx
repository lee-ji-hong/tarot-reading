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
  const cardsData = data?.cards;
  const [clickedCards, setClickedCards] = useState(Array(cardsData.length).fill(false));

  const handleCardClick = (index: number) => {
    const updatedClickedCards = [...clickedCards];
    updatedClickedCards[index] = !updatedClickedCards[index];
    setClickedCards(updatedClickedCards);
  };

  console.log(data)

  return (
    <div className={cx('container')}>
      {cardsData.map((card, idx) => (
        <div
          key={idx}
          className={cx('wrap-image')}
          onClick={() => handleCardClick(idx)}
        >
          <div className={cx('card', { active: clickedCards[idx] })}>
            <div className={cx('front')}>
              <img src={card?.cardImageUrl} alt={`card ${idx + 1}`} />
            </div>

            <div className={cx('back')}>
              <img src={getImagePath(idx)} alt={`card ${idx + 1}`} />
            </div>
          </div>
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
