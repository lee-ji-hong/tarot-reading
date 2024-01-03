import React from 'react';
import classNames from 'classnames/bind'
import styles from './App.modules.scss'

const cx = classNames.bind(styles)
function App() {
  return (
    <div className={cx('container')}>
      Learn React
    </div>
  );
}

export default App;
