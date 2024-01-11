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
  
  const cardsData = data?.cards;
  const [clickedCards, setClickedCards] = useState(Array(cardsData.length).fill(false));

  const handleCardClick = (index: number) => {
    const updatedClickedCards = [...clickedCards];
    updatedClickedCards[index] = !updatedClickedCards[index];
    setClickedCards(updatedClickedCards);
  };

  console.log(data)

  return (
    <>
    <div className={cx('container')}>
      {cardsData.map((card, idx) => (
            <Card key={idx} card={card} index={idx} onClick={() => handleCardClick(idx)} isActive={clickedCards[idx]} />
      ))}
    </div>
    <Info data={data}/>
    </>
  )
}

function Card({
  card,
  index,
  onClick,
  isActive
}:{
  card: any
  index: number
  onClick: () => void
  isActive: boolean 
}){
  const getImagePath = (index: number) => `/assets/images/card${index + 1}.png`;

  return (
    <div className={cx('wrap-image')} onClick={onClick}>
      <div className={cx('card', { active: isActive })}>
        <div className={cx('front')}>
          <img src={card?.cardImageUrl} alt={`card ${index + 1}`} />
        </div>

        <div className={cx('back')}>
          <img src={getImagePath(index)} alt={`card ${index + 1}`} />
        </div>
      </div>
    </div>
  )
}

function Info({ data }: { data?: any }) {
  return (
    <div>
      {data?.Interpretation}
    </div>
  );
}

export default ResultPage
