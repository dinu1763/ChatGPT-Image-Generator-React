import logo from './logo.svg';
import {Configuration, OpenAIApi} from 'openai';
import './App.css';
import { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const generateImage = async () => {
   const res = await openai.createImage({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
});
setResult(res.data.data[0].url);
}

  return (
    <div className="app-main">
      <h1>Generate an Image using Artificial Intelligence </h1>
      <input className='app-input' placeholder='Type here to Generate an AI Image...' type="text" onChange={(e) => {
        e.preventDefault();
        setPrompt(e.target.value);
        }}/>
      <button onClick={generateImage}>Generate an Image</button>
      {result.length>0? <img className='result-image' src={result} alt="" /> : <></>}
    </div>
  );
}

export default App;
