import classNames from 'classnames/bind'
import styles from './MessageBox.module.scss'
import React, { useState,PropsWithChildren } from 'react'

import { TarotData } from '@models/tarotData'
import { CallGPT } from '@/api/gpt'
const cx = classNames.bind(styles)

interface MessageBoxProps {
  title?: string;
}

interface TextBoxProps {
  inputValue: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const initialInterpretation = "안녕? 나는 점쟁이라고해. 너의 고민이나 어떤 것이든 들어줄 수 있어. 고민이 뭐야?";

function MessageBox({children,title,}: PropsWithChildren<MessageBoxProps>) {
  const [data, setData] = useState<TarotData>({ Interpretation: initialInterpretation, title: '', cards: [] });
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const endpoint = '/chat/completions'

  // console.log(inputValue)
  
  
  const handleClickAPICall = async () => {
    try{
      setIsLoading(true);
      const message = await CallGPT({endpoint:endpoint,prompt:inputValue});
      setData(message)
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false);
    }
  }

  console.log(data)
  return (
    <section className={cx('container')}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {isLoading ? <div className={cx('txt-content')}>로딩 중... 차분한 음악과 함께 기다려봐요.</div> 
      : (
          <div className={cx('txt-content')}>
            {data?.Interpretation}
            <TextBox
              inputValue={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              onClick={handleClickAPICall}
            />
          </div>
        )}
    </section>
  )
}

function TextBox({ inputValue, onChange, onClick }: TextBoxProps) {
  return (
    <div className={cx('wrap-text-box')}>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        className={cx('input-box')}
      />
      <div className={cx('button')}>
        <button onClick={onClick}>입력</button>
      </div>
    </div>
  );
}

export default MessageBox
