import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});
  const sectionRef = useRef();

  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);
    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000) setSectionStyle({ paddingTop: `${random}px` });
    }
  }, [number]);

  return (
    <div className="container">
      <section className="content" ref={sectionRef} style={sectionStyle}>
        <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
        <div>{number}</div>
        <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
      </section>
    </div>
  );
};

export default UseLayoutEffect;
