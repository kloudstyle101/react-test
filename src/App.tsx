import Bootstrap from './pages/Bootstrap';
import Icon from './pages/Icon';
import Style from './pages/Style';
import UsingIcon from './pages/UsingIcon';
import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';
import './App.css';
import Tailwindcss from './pages/Tailwindcss';
import Clock from './pages/Clock';
import { useEffect, useState, useCallback } from 'react';
import NumberState from './pages/NumberState';
import InputTest from './pages/InputTest';
import RadioInputTest from './pages/RadioInputTest';

export default function App() {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [])
  const decrement = useCallback(() => {
    setCount(count => count - 1)
  }, [])

  const [today, setToday] = useState(new Date());
  useEffect(() => {
    const duration = 1000;
    const id = setInterval(() => {
      setToday(new Date());
    }, duration)
   
  return () => clearInterval(id)  
  }, []);
  
  return ( 
    <main>
      <NumberState />
      <Clock today={today}/>
      <InputTest />
      <RadioInputTest />
    </main>
  );
}
