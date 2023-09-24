import React, { useCallback, useEffect, useMemo, useState } from 'react';
import List from '../components/List';

const UseCallback = () => {
  const [state, setState] = useState(false);
  const [dep, setDep] = useState(false);
  console.log('Parent Component redered');

  const handler = useCallback(
    (event) => {
      console.log('You clicked ', event.currentTarget);
    },
    [dep]
  );
  const statehanddler = () => {
    setState(!state);
  };
  return (
    <>
      <button onClick={statehanddler}>Change State Of Parent Component</button>
      <List handler={handler} />
      <button onClick={() => setDep(!dep)}>Ganti Dependency</button>
    </>
  );
};

export default UseCallback;
