
import './App.css';

import Row from './Row';
import request from './request';
import Banner from '/.Banner';

function App() {
  return (
    <div className="App">

      <Banner />

      <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={request.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies} />
      <Row title='Romenca Movies' fetchUrl={request.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={request.fetchDocumentaries} />
 
    </div>
  );
}

export default App;
