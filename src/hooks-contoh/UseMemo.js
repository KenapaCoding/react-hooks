import React, { useEffect, useMemo, useState } from 'react';

function getKuadrat(num) {
  console.log('fungsi kuadrat');
  for (let i = 0; i < 2000000000; i++) {}
  return num * num;
}
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [redButton, setRedButton] = useState(false);
  const kuadrat = useMemo(() => {
    return getKuadrat(count);
  }, [count]);
  const display = useMemo(() => {
    return {
      text: redButton
        ? 'Click untuk membuat button blue'
        : 'Click untuk membuat button red',
      color: `${redButton ? 'red' : ''}`,
    };
  }, [redButton]);
  useEffect(() => {
    console.log('display dibuat ulang');
  }, [display]);
  return (
    <div className="container">
      <div className="hooks">useMemo</div>
      <div className="content">
        <button
          className={`${redButton ? 'red' : ''}`}
          onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
        <div>{count}</div>
        <button
          className={`${redButton ? 'red' : ''}`}
          onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
      </div>
      <button
        className={display.color}
        onClick={() => setRedButton((color) => !color)}>
        {display.text}
      </button>
      <div>Hasil dari count x count = {kuadrat}</div>
    </div>
  );
};

export default UseMemo;
