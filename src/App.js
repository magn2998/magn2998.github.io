import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let dictionary = require("./resources/danskesubstantiver.json");

  let wordIndex = Math.round( Math.random() * dictionary.length);
  const [shoutouttohisfamily, setShoutouttohisfamily] = useState(dictionary[wordIndex]);
  dictionary.splice(wordIndex, 1);
  

  function getNewWord() {
    wordIndex = Math.round( Math.random() * dictionary.length);
    setShoutouttohisfamily(dictionary[wordIndex]);
    dictionary.splice(wordIndex, 1);
  }

  // Imports the Google Cloud client library
  const textToSpeech = require('@google-cloud/text-to-speech');

  // Import other required libraries
  const fs = require('fs');
  const util = require('util');
  // Creates a client
  const client = new textToSpeech.TextToSpeechClient();
  async function quickStart() {
    // The text to synthesize
    const text = 'hello, world!';

    // Construct the request
    const request = {
      input: {text: text},
      // Select the language and SSML voice gender (optional)
      voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
      // select the type of audio encoding
      audioConfig: {audioEncoding: 'MP3'},
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');
  }
  quickStart();

  return (
    <div className="App">
      <h2>Skud ud til {shoutouttohisfamily}</h2>
      <button onClick={getNewWord}>Nyt Ord</button>
    </div>
  );
}

export default App;
