import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import { List, ListRowProps } from 'react-virtualized';

function App() {
  const [count, setCount] = useState(0);
  const list = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);
  
  const rowRenderer = ({ index, style, key }: ListRowProps) => (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <List
        width={300}
        height={300}
        rowCount={list.length}
        rowHeight={20}
        rowRenderer={rowRenderer}
      />
    </div>
    </>
  )
}

export default App;
