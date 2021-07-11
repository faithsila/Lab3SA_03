import React from 'react';
import ReactDOM from 'react-dom';
import WordCard from './WordCard';
import './App.css';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
const word = "Hello";
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
