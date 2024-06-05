import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState, useEffect } from 'react';
import API_KEY from './config';

// const gifAPI = "api.giphy.com/v1/gifs/trending"

/* FEEDBACK: Excellent job on this Jordy! */

function App() {
  //state manages gifs and user input
  const [gif, setGif] = useState([]);
  const [error, setError] = useState('');

  //fetch data
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`);
      console.log(data);
      if (data) setGif(data.data);
      if (error) setError(error.message);
    }
    doFetch();
  }, []); //empty array will run only once

  //code to render the data or the error
  console.log(gif);



  const handleSearchGifs = async (searchTerm) => {
    /* FEEDBACK: I don't think you need to put this in
    a try/catch since the handleFetch function has a try/catch. 
    The error will be returned */
    try {
      const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&rating=g`);
      if (data) {
        setGif(data.data);
        setError('');
      }
      if (error) {
        setError(error.message);
        setGif([]);
      }
    } catch (error) {
      console.error('Error searching gifs:', error);
      setError('Erro while searching for gifs.');
      setGif([]);
    }
  };


  /* FEEDBACK: The extra styles are cool, but they make the title
   in the navbar a bit hard to read */

  return (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch searchGif={handleSearchGifs} />
        <br />
        <div>
          <GifContainer gifs={gif} />
        </div>
      </div>
    </div>
  );
}

export default App;



