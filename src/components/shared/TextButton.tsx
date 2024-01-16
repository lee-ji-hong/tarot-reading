import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

import classNames from 'classnames/bind'
import styles from './TextButton.module.scss'

const cx = classNames.bind(styles)

function TextButton({
  title,
  onClick,
}: {
  title: string
  onClick?: () => void
}) {
  return (
    <div className={cx('button')}>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default TextButton