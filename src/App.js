import logo from './logo.svg';
import './App.css';
import MovieList from './components/movie-list';
import NavBar from './components/navbar';

function App() {
  return (
    <div>
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
