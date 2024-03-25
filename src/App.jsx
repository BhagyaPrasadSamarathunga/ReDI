import { useState } from 'react';
import './App.css';
import AboutPage from './components/AboutPage';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function App() {
  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
      <AboutPage/>
    </>

  );
}

export default App
