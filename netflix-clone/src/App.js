
import './App.css';
import Row from './components/Row';
import request from './components/requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      THE NETFLIX CLONE
    <Navbar/>
    <Banner />  
    <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending" fetchUrl={request.fetchTrending}/>
    <Row title="TopRated" fetchUrl={request.fetchTopRated}/>
    <Row title="ActionMovies" fetchUrl={request.fetchActionMovies}/>
    <Row title="ComedyMovies" fetchUrl={request.fetchComedyMovies}/>
    <Row title="HorrorMovies" fetchUrl={request.fetchHorrorMovies}/>
    <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
