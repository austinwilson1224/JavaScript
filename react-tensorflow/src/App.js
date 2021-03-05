import logo from './logo.svg';
import './App.css';
import React, { useReducer, useState, useRef } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';

const stateMachine = {
  initial: 'initial',
  states: {
    initial: { on: { next: 'loadingModel' }},
    loadingModel: { on: { next: 'awaitingUpload' }},
    awaitingUpload: { on: { next: 'ready' }},
    ready: { on: { next: 'classifying' }, showImage: true },
    classifying: { on: { next: 'complete' }},
    complete: { on: { next: 'awaitingUpload'}, showImage: true }
  }
}


const reducer = (currentState, event) => stateMachine.states[currentState].on[event] || stateMachine.initial;

function App() {

  const [ state, dispach] = useReducer(reducer, stateMachine.initial);
  const [ model, setModel ] = useState(null);
  const [ imageUrl, setImageUrl ] = useState(null); 
  const inputRef = useRef();
  const imageRef = useRef();

  const next = () => dispach('next');

  const loadModel = async () => {
    next();
    const model = await mobilenet.load();
    setModel(model);
    next();
  }

  const handleUpload = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageUrl(url);
      next();
    }
  }

  const buttonProps = {
    initial:{ text: 'load model', action: loadModel },
    loadingModel: { text: 'loading model...', action: () => {} },
    awaitingUpload: {text: 'upload photo', action: () => {}},
    ready: { text: 'identify', action: () => {} },
    classifying: { text: 'classifying...', action: () => {}},
    complete: {text: 'reset', action: () => {}} 

  }


  const { showImage = false } = stateMachine.states[state];
  return (
    <div className="App">
      { showImage && <img src={imageUrl} alt="preview" ref={imageRef}/> }
      <input type="file" accept="image/*" capture="camera"  ref={inputRef} onChange={handleUpload} />
      <button onClick={buttonProps[state].action}>{buttonProps[state].text}</button>
    </div>
  );
}

export default App;
