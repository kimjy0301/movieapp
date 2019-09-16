import React from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";


const URL = 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };

  async componentDidMount() {
    const data = await axios.get(URL);

    const { data: { data: { movies } } } = data;

    this.setState({
      movies: movies,
      isLoading: false
    })
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
            <div className="movies">
              {movies.map(movie =>
                <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
              )}
            </div>
          )}
      </section >
    )
  }
}

export default App;
