import React, { useState, useEffect } from 'react'

let timeChange

const Btn = () => {
  const [time, setTime] = useState(60)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [btnContent, setBtnContent] = useState('获取验证码')

  useEffect(() => {
    clearInterval(timeChange)
  }, []);

  useEffect(() => {
    if (time > 0 && time < 60) {
      setBtnContent(`${time}s后重发`)
    } else {
      clearInterval(timeChange)
      setBtnDisabled(false)
      setTime(60)
      setBtnContent('获取验证码')
    }
  }, [time]);

  const getPhoneCaptcha = () => {
  	// 注意，不要使用 setTime(t-1) ： 闭包问题会导致time一直为59
    timeChange = setInterval(() => setTime(t => --t), 1000)
    setBtnDisabled(true)
  };
  return (
    <button disabled={btnDisabled} onClick={getPhoneCaptcha}>
      {btnContent}
    </button>
  );
};

export default Btn;