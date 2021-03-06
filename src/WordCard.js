import React, { useState,} from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';



const prepareStateFromWord = given_word =>{
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    let time = 0
    return {
        time,
        word,
        chars,
        attempt : 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

 const activationHandler = c =>{
     console.log(`${c} has been activated`)

     let guess = state.guess + c
     setState({...state, guess})
     if(guess.length == state.word.length){
         if(guess == state.word){
             console.log('yeah!')
             setState({...state,completed: true})
         }
         else if(guess != state.word){
             state.time++;
             console.log('reset, next attempt')
             setState({...state, guess: '',attempt: state.attempt + 1})
             
             if (state.time == 2){
                console.log('Hint : it mean like Belive.')
             }
             else if(state.time == 3){
                 console.log('1st letter is',state.word[0])
                 console.log('4th letter is',state.word[3])
             }
             else if(state.time == 5){
             console.log('You lose')
             setState({...state, completed: true})
             }
         }
     }
 }
 return (
 <div>
        { 
        state.chars.map((c, i) => 
            <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>) 
        }
 </div>
 );
}
