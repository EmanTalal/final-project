import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>hhhh</h1>
      <Link to={'Plan'}>
        {' '}
        <button className="btn ml-8">Plan page</button>
      </Link>
    </>
  );
}

export default App;
