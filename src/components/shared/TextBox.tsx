import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import classNames from 'classnames/bind'
import styles from './TextBox.module.scss'
import TextButton from '@shared/TextButton'

const cx = classNames.bind(styles)

interface TextBoxProps {
  inputValue: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
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
      <TextButton title="입력" onClick={onClick} />
    </div>
  )
}

export default TextBox