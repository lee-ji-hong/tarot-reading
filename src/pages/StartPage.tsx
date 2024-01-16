import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil';
import classNames from 'classnames/bind'

import styles from './StartPage.module.scss'

import { useRouter } from '@pages/routing';
import { TarotData } from '@models/tarotData'
import { LuckData } from '@recoil/atom';
import { CallGPT } from '@/api/gpt'
import MessageBox from '@shared/MessageBox'
import TextBox from '@shared/TextBox'
import TextButton from '@shared/TextButton'
const cx = classNames.bind(styles)

function StartPage() {
  const [data, setData] = useRecoilState<TarotData>(LuckData);
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter();
  const endpoint = '/chat/completions'

  // if (localStorage.getItem('LuckData')) {
  //   window.localStorage.clear();
  //   console.log('로컬스토리지 데이터 삭제')
  // }

  const handleClickAPICall = async () => {
    try {
      setIsLoading(true)
      const message = await CallGPT({ endpoint: endpoint, prompt: inputValue })
      setData(message)
      localStorage.setItem('LuckData', JSON.stringify(message));
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }
  const first = '안녕하세요, 저는 타로 점쟁이입니다. 당신의 고민을 들어보고 더 나은 방향을 찾아드릴 수 있어요. 어떤 얘기든 편하게 나눠주세요.'

  return (
    <div className={cx('container')}>
      <MessageBox title='점쟁이'>
      {isLoading ? (
        <div className={cx('txt-content')}>
          로딩 중... 차분한 음악과 함께 기다려봐요.
        </div>
      ) : (
        <div className={cx('txt-content')}>
          {data?.title ? (
            <>
              {data.title} 에 대한 결과가 나왔습니다.<br /><br />
              결과를 확인하러 가보세요.<br /><br />
              어떤 도전에 직면하더라도 긍정적인 마음가짐을 유지하면서 나아가시면
              행운이 함께할 거예요.<br /><br />
              무엇보다 중요한 건 자신에게 솔직한 마음을 가져 좋은 결과를
              이끌어내는 데 기여하는 것이에요.<br /><br />
              새로운 시작과 흥미로운 여정이 여러분을 기다리고 있습니다.<br /><br />
              기대가 되는 해가 되길 바랄게요.
              <TextButton title="결과보기" onClick={() => router.push('/result')} />
            </>
          ) : (
            <>
              {first}
              <TextBox
                inputValue={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onClick={handleClickAPICall}
              />
            </>
          )}
        </div>
      )}
      </MessageBox>
    </div>
  )
}

export default StartPage
