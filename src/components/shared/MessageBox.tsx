import classNames from 'classnames/bind'
import styles from './MessageBox.module.scss'

const cx = classNames.bind(styles)

function MessageBox({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
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
