import React from 'react';
import WordCard from './WordCard';
import './App.css';
const word = "FAITH";
function App() {
  return (
    <div>
    {   
    <WordCard value = {word}/>
    }
    </div>
  );
}

export default App;
