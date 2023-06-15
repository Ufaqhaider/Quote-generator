import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [quote,Setquote] = useState('');

  const quoteAPI= async ()=>{
    let array = [];
    try{
        const data = await axios.get('https://api.adviceslip.com/advice')
        array=data.data.slip
        console.log(array)
    }catch(error){
      console.log(error)
    }
  
    
  try{
    Setquote(array.advice)
  }catch(error){
    console.log(error)
  }
  
}

  // 'https://api.quotable.io/random'
  useEffect(()=>{
    quoteAPI();
  },[])
  return (
    <>
    <p className='heading'>Quote Generator</p>
    <div className='App'>
      <h1>{quote}</h1>
      <br></br>
      <button className='btn' onClick={quoteAPI}>Gimme Quote</button>
    </div>
    </>

  );
}

export default App;
