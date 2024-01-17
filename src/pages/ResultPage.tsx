import React from 'react'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import classNames from 'classnames/bind'
import styles from './ResultPage.module.scss'
import { LuckData } from '@recoil/atom'
import MessageBox from '@shared/MessageBox'
const cx = classNames.bind(styles)

function ResultPage() {
  const data = useRecoilValue(LuckData)

  const cardsData = data?.cards
  const [clickedCards, setClickedCards] = useState(
    Array(cardsData.length).fill(false),
  )

  const handleCardClick = (index: number) => {
    const updatedClickedCards = [...clickedCards]
    updatedClickedCards[index] = !updatedClickedCards[index]
    setClickedCards(updatedClickedCards)
  }

  return (
    <div className={cx('container')}>
      <video
        className={cx('video-background')}
        autoPlay={true}
        muted={true}
        loop={true}
        // poster='/assets/poster.jpeg'
      >
        <source src='/assets/main.mp4' type='video/mp4'></source>
      </video>
        {cardsData.map((card, idx) => (
          <Card
            key={idx}
            card={card}
            index={idx}
            onClick={() => handleCardClick(idx)}
            isActive={clickedCards[idx]}
          />
        ))}
      <MessageBox title={data.title}>
        <div className={cx('txt-content')}>
          {data.Interpretation}
        </div>         
        {cardsData.map((card, idx) =>(
        <>
          <div className={cx('txt-title')}>{card.cardName}</div>
          <div className={cx('txt-content')}>{card.cardMeaning}</div>
        </>
        ))}          
      </MessageBox>
    </div>
  )
}

function Card({
  card,
  index,
  onClick,
  isActive,
}: {
  card: any
  index: number
  onClick: () => void
  isActive: boolean
}) {
  const [xy, setXY] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    centerX: 0,
    centerY: 0,
    dot: 0,
  })
  const getImagePath = (index: number) => `/assets/images/card${index + 1}.png`

  const handleMouseMove = (e: React.MouseEvent) => {
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect()
    const left = e.clientX - x
    const top = e.clientY - y
    const centerX = left - width / 2
    const centerY = top - height / 2
    const dot = Math.sqrt(centerX ** 2 + centerY ** 2)

    setXY({
      x: x,
      y: y,
      width: width,
      height: height,
      left: left,
      top: top,
      centerX: centerX,
      centerY: centerY,
      dot: dot,
    })
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    const { x, y, width, height } = e.currentTarget.getBoundingClientRect()
    
    setXY({
      x: x,
      y: y,
      width: width,
      height: height,
      left: 0,
      top: 0,
      centerX: 0,
      centerY: 0,
      dot: 0,
    })
  }
  // console.log(xy)
  // console.log(-xy?.centerY / 100,xy?.centerX / 100,0,xy?.dot / 8)

  return (
    <div className={cx('wrap-image')} onClick={onClick}>
      <div
        className={cx('card', { active: isActive })}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={cx('front')}>
          <img src={card?.cardImageUrl} alt={`card ${index + 1}`} />
          <div className={cx('front-txt')}>
            <span>{card.cardName}</span>
          </div>
        </div>
        <div
          className={cx('back')}
          style={{
            transform: `rotate3d(${-xy?.centerY / 70}, ${
              xy?.centerX / 70
            }, 0,25deg)`,
            backgroundImage: `            
            radial-gradient(circle at ${xy?.left}px ${
              xy?.top
            }px, #00000040, #ffffff00, #ffffff99),
            url(${getImagePath(index)})`,
            boxShadow: `${-xy.centerX / 5}px ${
              -xy.centerY / 10
            }px 10px rgba(0, 0, 0, 0.2)`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default ResultPage
