import React, { PropsWithChildren } from 'react'
import classNames from 'classnames/bind'

import styles from './MessageBox.module.scss'

const cx = classNames.bind(styles)

interface MessageBoxProps {
  title?: string
}

function MessageBox({ children, title }: PropsWithChildren<MessageBoxProps>) {

  return (
    <section className={cx('container')}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      <div className={cx('txt-content')}>
        {children}
      </div>
    </section>
  )
}

export default MessageBox
