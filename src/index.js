import { useState } from 'react';
import './styles/globals.css';
// import { NetworkProvider } from './context/NetworkProvider';

const NetworkProvider = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-2 text-xl text-red">
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      {count}
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
};

export { NetworkProvider };
