import React from 'react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { CallGPT } from './api/gpt'
import classNames from 'classnames/bind'
import styles from './App.modules.scss'

import { Routes } from '@pages/Routes';
import MessageBox from '@shared/MessageBox'

const queryClient = new QueryClient();
const cx = classNames.bind(styles)

function App() {
  return (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </RecoilRoot>
    
  )
}

export default App
