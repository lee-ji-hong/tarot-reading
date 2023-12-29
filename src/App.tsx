import React from 'react';
import classNames from 'classnames/bind'
import styles from './App.modules.scss'

const cx = classNames.bind(styles)
function App() {
  return (
    <div className={cx('container')}>
      테스트
    </div>
  );
}

export default App;
