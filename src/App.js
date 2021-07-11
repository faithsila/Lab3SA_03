import React from 'react';
import WordCard from './WordCard';
import './App.css';

const word = "Hello";
function App() {
  return (
    <div>
      <p>Enter your name:</p>
      <input
       type="text"
       />
    {   
    <WordCard value = {word}/>
    }
    </div>
  );
}

export default App;
