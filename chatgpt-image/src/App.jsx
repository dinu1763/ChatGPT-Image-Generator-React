import logo from './logo.svg';
import {Configuration, OpenAIApi} from 'openai';
import './App.css';
import { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY
});
const openai = new OpenAIApi(configuration);
const generateImage = async () => {
  setLoading(true);
   const res = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
});
setLoading(false);
setResult(res.data.data[0].url);
}

  return (
    <div className="app-main">
      {loading ? (
         <>
          <h2>Generating..Please Wait..</h2>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
        <h1>Generate an Image using Artificial Intelligence </h1>
        <input className='app-input' placeholder='Type here to Generate an AI Image...' type="text" onChange={(e) => {
          e.preventDefault();
          setPrompt(e.target.value);
          }}/>
        <button onClick={generateImage}>Generate an Image</button>
        {result.length>0? <img className='result-image' src={result} alt="" /> : <></>}
        </>
      )}
    </div>
  );
}

export default App;
