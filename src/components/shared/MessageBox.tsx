import classNames from 'classnames/bind'
import styles from './MessageBox.module.scss'
import React, { useState,PropsWithChildren } from 'react'

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

function MessageBox({children,title,}: PropsWithChildren<MessageBoxProps>) {
  const [data, setData] = useState<string>("안녕? 나는 점쟁이라고해. 너의 고민이나 어떤 것이든 들어줄 수 있어. 고민이 뭐야?");
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const endpoint = '/chat/completions'

  console.log(inputValue)
  
  const handleClickAPICall = async () => {
    try{
      setIsLoading(true);
      const ment = `안녕 너 이름이 뭐야?
      `
      const message = await CallGPT({endpoint:endpoint,prompt:ment});
      setData(message)
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={cx('container')}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      <div className={cx('txt-content')}>
        {data}
      <TextBox
        inputValue={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        onClick={handleClickAPICall}
      />
      </div>
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
