import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";


function Movie({ year, title, summary, poster, genres }) {

    let stringGenre = "";

    for (let i = 0; i < genres.length; i++) {
        if (i === 0) {
            stringGenre = genres[i];
        } else {
            stringGenre = stringGenre + '/' + genres[i];
        }
    }



    
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h4 className="movie__year">{year}</h4>
                <h4 className="movie__year">{stringGenre}</h4>
                <p className="movie__summary">{summary.length > 300 ?
                    summary.slice(0, 300) :
                    summary}
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;